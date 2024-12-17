import { LoginRequestDto } from '@app/modules/security/domain/login/login-request.dto';
import { LoginResponseDto } from '@app/modules/security/domain/login/login-response.dto';
import { UserRepository } from '@app/modules/security/infrastructure/persistence/repositories/user/user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginUser {
  /**
   * Constructs a new instance of the `LoginUser` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _userRepository - The repository for accessing todo data.
   */
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly jwt: JwtService,
  ) {}
  /**
   * Handles the login of user.
   * @returns A promise that resolves to an array of UserResponseDto objects.
   */

  async handle(loginRequest: LoginRequestDto): Promise<LoginResponseDto> {
    const exit = await this._userRepository.findBy({
      where: [{ email: loginRequest.email }],
      relations: { userRole: true, persons: { companyPerson: true } },
    });

    if (!exit) {
      throw new NotFoundException('Email o contraseña incorrecta.');
    }

    const password = bcrypt.compareSync(loginRequest?.password, exit?.password);
    if (!password) {
      throw new NotFoundException('Email o contraseña incorrecta.');
    }

    const payload = {
      correo: exit?.email,
      id: exit?.id,
      idCompany: exit?.persons?.companyPerson[0]?.idCompany,
    };

    return {
      id: exit?.id,
      idRol: exit?.userRole[0]?.idRole,
      message: 'Login exitoso',
      token: this.jwt.sign(payload, {
        expiresIn: '4h',
      }),
      error: false,
    };
  }
}
