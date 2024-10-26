import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { User } from '@app/modules/security/domain/user/user.entity';
import { UserRepository } from '@app/modules/security/infrastructure/persistence/repositories/user/user.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all users.
 */
@Injectable()
export class FindAllUser {
  /**
   * Constructs a new instance of the `FindAllUserService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _userRepository - The repository for accessing user data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
  ) {}

  /**
   * Handles the finding of all users.
   * @returns A promise that resolves to an array of UserResponseDto objects.
   */
  async handle(): Promise<UserResponseDto[]> {
    const users = await this._userRepository.getAll();

    const response = this._mapper.mapArray(users, User, UserResponseDto);

    return response;
  }
}
