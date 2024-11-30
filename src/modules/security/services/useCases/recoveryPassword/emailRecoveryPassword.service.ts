import { EmailAdapter } from '@app/modules/common/adapters/email/emailAdapter.service';
import { RecoveryPasswordLink } from '@app/modules/common/adapters/email/views/recoveryPasswordLink';
import { FileManager } from '@app/modules/common/adapters/fileManager';
import { UserRepository } from '@app/modules/security/infrastructure/persistence/repositories/user/user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

/**
 * Service class for email.
 */
@Injectable()
export class EmailRecoveryPassword {
  /**
   * Constructs a new instance of the `LoginUser` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _userRepository - The repository for accessing todo data.
   */
  constructor(
    private readonly _emailAdapter: EmailAdapter,
    private readonly _userRepository: UserRepository,
    private readonly _jwt: JwtService,
    private readonly _emailLink: RecoveryPasswordLink,
    private readonly _file: FileManager,
  ) {}

  /**
   * Handles the login of user.
   * @returns A promise that resolves to an array of UserResponseDto objects.
   */
  async handle(email: string): Promise<string> {
    const validationEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if (!validationEmail.test(email))
      throw new NotFoundException('email invalido.');

    const user = await this._userRepository.findBy({
      where: { email: email?.toLocaleLowerCase(), state: true },
    });

    if (!user)
      throw new NotFoundException(
        'Este correo no está registrado en nuestra base de datos.',
      );

    // Genera el token JWT
    const token = await this._jwt.signAsync(
      {
        email: user?.email?.toLocaleLowerCase(),
      },
      { expiresIn: '10m' },
    );

    await this._emailAdapter.sendEmail({
      from: 'Aris - Recuperación de Contraseña <aris@gmail.com>',
      subject: 'Aris - Recuperación de Contraseña',
      to: user?.email,
      html: await this._emailLink.email({
        url: `${user?.id}/${token}`,
        name: user?.userName,
        description:
          'Hemos recibido una solicitud para <b>restablecer la contraseña</b> de tu cuenta en nuestro sitio web. Para proceder con el restablecimiento de tu contraseña, por favor sigue el enlace proporcionado a continuación:',
        buttonText: 'Restablecer Contraseña',
        page: 'recoverPassword',
        logo: 'logo/aris.png',
      }),
    });

    await this._userRepository.update(user?.id, {
      ...user,
      token,
    });

    return 'Hemos enviado un correo a la dirección que proporcionaste con las instrucciones para restablecer tu contraseña. Revisa tu bandeja de entrada o spam.';
  }
}
