import { LoginRequestDto } from '@app/modules/security/domain/login/login-request.dto';
import { LoginResponseDto } from '@app/modules/security/domain/login/login-response.dto';
import { UserRepository } from '@app/modules/security/infrastructure/persistence/repositories/user/user.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
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
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
    private readonly jwt: JwtService,
  ) {}
  /**
   * Handles the login of user.
   * @returns A promise that resolves to an array of UserResponseDto objects.
   */

  async handle(loginRequest: LoginRequestDto): Promise<LoginResponseDto> {
    console.log(loginRequest);

    const exit = await this._userRepository.findBy({
      where: [{ email: loginRequest.email }],
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
      id_usuario: exit?.id,
    };

    return {
      message: 'Login exitoso',
      token: this.jwt.sign(payload),
      error: false,
    };
  }
}
