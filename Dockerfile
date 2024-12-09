# Usa una imagen base oficial de Node.js
FROM node:lts-alpine AS build


# Crea el directorio /home/node/app/node_modules si no existe y cambia el propietario del directorio y su contenido a 'node'
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# Establece el directorio de trabajo en el contenedor
WORKDIR /home/node/app
# Copia el archivo package.json y package-lock.json
COPY package*.json ./
COPY pnpm-lock*.yaml ./

# Instala pnpm
RUN npm install pnpm -g
# Instala las dependencias del proyecto
RUN pnpm install

# Copia el resto del código de la aplicación
COPY . .

# Argumentos de entorno
ARG DATABASE_URL
ARG PORT

# Variables de entorno
ENV DATABASE_URL=$DATABASE_URL
ENV NODE_ENV=production
ENV PORT=$PORT

# Compila la aplicación
RUN npm run build

# Usa una imagen base oficial de Node.js
FROM node:lts-alpine AS production
# Establece el directorio de trabajo en el contenedor
WORKDIR /home/node/app

# Copia el directorio de la imagen de compilación
COPY --from=build /home/node/app/dist ./dist
COPY --from=build /home/node/app/package.json ./
COPY --from=build /home/node/app/node_modules ./node_modules

# Instala pm2 globalmente para ejecutar la aplicación en producción y omite la ejecución de scripts de instalación de paquetes npm 
RUN npm install -g pm2 --ignore-scripts

# Expone el puerto 3000
EXPOSE $PORT

# Define el comando para ejecutar la aplicación
CMD ["pm2-runtime", "dist/main.js"]
