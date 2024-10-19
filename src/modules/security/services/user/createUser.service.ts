import { UserRequestDto } from '@app/modules/security/domain/user/dto/user-request.dto';
import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { User } from '@app/modules/security/domain/user/user.entity';
import { UserRepository } from '@app/modules/security/infrastructure/persistence/repositories/user/user.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new user.
 */
@Injectable()
export class CreateUser {
  /**
   * Creates an instance of the CreateUserService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userRepository - The repository for managing User entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
  ) {}

  /**
   * Handles the creation of a new user.
   *
   * @param createUserDto - The data transfer object containing the user details.
   * @returns The response containing the created user.
   */
  async handle(userRequestDto: UserRequestDto): Promise<UserResponseDto> {
    const userPayload = this._mapper.map(userRequestDto, UserRequestDto, User);

    const user = await this._userRepository.create(userPayload);

    const response = this._mapper.map(user, User, UserResponseDto);

    return response;
  }
}
