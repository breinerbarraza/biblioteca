export default function PlantillaCodigoDeAcceso({
    firstName,
    email,
    documentNumber
  }: {
    firstName: string;
    email: string;
    documentNumber: string;
  }) {
    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenida</title>
  <link rel="stylesheet" href="styles.css">
     <style>
       body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

.email-container {
  background-color: #ffffff;
  width: 30%;
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  width: 50px;
}

h1 {
  color: #272729;
}

p, ul {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}

ul {
  padding-left: 20px;
}

ul li {
  margin-bottom: 5px;
}
       
.cont-btn {
  width: 100%;
  height: 20px; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5; 
}

.btn {
  display: inline-block;
  background-color: #03A685;
  color: white;
   width: 50%;
   height: 20px;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
}

.btn:hover {
  background-color: #02385A;
  text-decoration: none;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

         </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <img src="logo.png" alt="Logo de Aris" class="logo">
      <h1>¡Te damos la bienvenida!</h1>
    </div>
    <p>Hola <strong>${firstName}</strong>,</p>
    <p>Tu cuenta ha sido creada exitosamente, y puedes acceder con los siguientes datos:</p>
    <ul>
      <li><strong>Usuario:</strong> ${email}</li>
      <li><strong>Contraseña temporal:</strong>${documentNumber}</li>
    </ul>
    <p>Por seguridad, te recomendamos cambiar tu contraseña al iniciar sesión. Accede a la plataforma desde este botón:</p>
      <div class="cont-btn">
         <a href="#" class="btn">Acceder a la plataforma</a>
      </div>
    <p>Si tienes preguntas no dudes en contactarnos: <a href="mailto:ssoporte@aris.com.co">soporte@aris.com.co</a></p>
    <p>Gracias por ser parte de Aris.</p>
  </div>
</body>
</html>
`;
  }
  