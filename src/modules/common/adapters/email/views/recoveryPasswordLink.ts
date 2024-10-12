import { selectEnvironment } from '@app/modules/common/utils';
import { FileManager } from '../../fileManager';

type TEmail = {
  url: string;
  name: string;
  buttonText: string;
  description: string;
  logo: string;
  page?: 'recuperarContraseña' | 'nuevaContraseña';
};

export class RecoveryPasswordLink {
  constructor(private readonly _fileManager: FileManager) {}

  async email({
    buttonText,
    description,
    name,
    url,
    page = 'recuperarContraseña',
    logo = '',
  }: TEmail) {
    return `<!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" type="text/css">
	<!--<![endif]-->
    <title>Restablecimiento de Contraseña</title>
    <style>
    body {
        font-family: Poppins;
        background-color:#e3e3e3;
        margin: 0;
        padding: 0;
        }
        .container{
            width:100%;
            height:100%;
            margin: 100px 0;
            }
            .sub-container {
            max-width: 470px;
            margin: 0 auto;
            height: auto;
            padding: 50px;
            background-color: #fff;
            border: 1px solid rgb(196,196,196,100%);
            border-radius:5px;
            }
        .button {
            background-color: #0F719B;
            text-align: center;
            text-decoration: none;
            display: block;
            margin: 20px auto;
            width: 219px;
            top: 649px;
            left: 967px;
            padding: 6px 16px 6px 16px;
            gap: 0px;
            border-radius: 3px;
            opacity: 0px;
            }
        .button:hover{
            background-color: #094668;
            }
            .buttonText{
                color:white;
                }
                .content{
                    padding:40px;
                    }
                    span{
                        font-size:14px;
            font-weight:500;
            Line-height:24px;
            Letter: 0.4px
        }
        p{
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            text-align: left;
            color: #545558;
            }
            @media (max-width: 600px) {
                .sub-container {
                    padding: 20px;
                    }
                    .button {
                        font-size: 14px;
                padding: 10px 20px;
                }
                }
    </style>
    </head>
    <body>
    <div class="container">
    <div class="sub-container">
          <div style="text-align: center;">
            <img src=${logo} alt="Logo OSSADO" style="display: inline-block; height: auto; border: 0; width: 170px; max-width: 100%;" width="170"> 
        </div> 
        <div class="content">
        <p>Estimado ${name},</p>
        <p>${description}</p>
        <a href="${selectEnvironment()}/${page}/${url}" class="button"><span class="buttonText">${buttonText}</span></a>
        <p>Si no has solicitado este cambio, por favor ignora este correo electrónico o ponte en contacto con nuestro <b>equipo de soporte</b> lo antes posible.</p>
        <p>Muchas gracias,</p>
        <p>Wow Desarrollos Digitales</p>
        </div>
        </div>
        </div>
        </body>
        </html>`;
  }
}
