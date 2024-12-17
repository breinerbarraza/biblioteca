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

.header {
  text-align: center;
  width: 100%; 
  height: 10px;
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
  color: #272729;
}

ul {
  padding-left: 20px;
}

ul li {
  margin-bottom: 5px;
  color: #272729 !important;
}
       
.cont-btn {
  width: 100%;
  height: 40px; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:5px
}

.btn {
  display: inline-block;
  background-color: #03a685;
  color: white;
  width: 50%;
  height: 30px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  padding-top:10px;
}

.btn:hover {
  background-color: #0389a6;
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
<body style="margin: 0; background-color: #e9ebec; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none; padding: 5px; height: 100%; width: 95%;">
    <div style="width: 420px; height: 500px; flex-shrink: 0; padding: 2px 5px 5px 25px; border-radius:10px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background: #FFF; margin: 0 auto">
    <div style="margin-top: 30px; text-align: center; width:100%; height:auto;">
     <img src="cid:logo_aris" style="width: 140px; height: 40px; margin-right:9px" />
     <h1>¡Te damos la bienvenida!</h1>
      </div>
    <p>Hola <strong>${firstName}</strong>,</p>
    <p>Tu cuenta ha sido creada exitosamente, y puedes acceder con los siguientes datos:</p>
    <ul>
      <li> <a style="color: #272729;">Usuario: <strong >${email}</strong></a> </li>
      <li>Contraseña temporal: <strong>${documentNumber}</strong></li>
    </ul>
    <p>Por seguridad, te recomendamos cambiar tu contraseña al iniciar sesión. Accede a la plataforma desde este botón:</p>
      <div class="cont-btn">
         <a style="margin-left:97px;  text-align: center; color: #FFFFFF;" href="#" class="btn">Acceder a la plataforma</a>
      </div>
    <p style="margin-top:15px">Si tienes preguntas no dudes en contactarnos: <a style="color: #272729;" href="mailto:ssoporte@aris.com.co"><strong>soporte@aris.com.co</strong>, Gracias por ser parte de Aris.</a></p>
  </div>
</body>
</html>
`;
}
