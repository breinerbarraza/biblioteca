import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { User } from '@app/modules/security/domain/user/user.entity';
import { UserRepository } from '@app/modules/security/infrastructure/persistence/repositories/user/user.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

/**
 * Service class for email.
 */
@Injectable()
export class RecoveryPassword {
  /**
   * Constructs a new instance of the `RecoveryPassword` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _userRepository - The repository for accessing todo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
  ) {}

  /**
   * Handles the login of user.
   * @returns A promise that resolves to an array of UserResponseDto objects.
   */
  async handle(request: {
    id: number;
    password: string;
  }): Promise<UserResponseDto> {
    const user = await this._userRepository.findBy({
      where: { id: request?.id },
    });

    const validatePassword = await bcrypt.compare(
      request?.password,
      user?.password || '',
    );

    if (validatePassword) {
      throw new NotFoundException(
        'La nueva contraseña no puede ser igual a. Por favor, elige una diferente.',
      );
    }

    const newUser = await this._userRepository.update(user?.id, {
      ...user,
      password: await bcrypt.hash(request?.password, 10),
      token: '',
    });

    const response = this._mapper.map(newUser, User, UserResponseDto);

    return response;
  }
}
