import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { User } from '@app/modules/security/domain/user/user.entity';
import { UserRepository } from '@app/modules/security/infrastructure/persistence/repositories/user/user.repository';
import { FindOneUser } from '@app/modules/security/services/user/findOneUser.service';
import { UserUpdateDto } from '@app/modules/security/domain/user/dto/user-update.dto';

/**
 * Service class for updating a user.
 */
@Injectable()
export class UpdateUser {
  /**
   * Constructs a new instance of the UpdateUserService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userRepository - The repository for accessing user data.
   * @param _findOneUser - The use case for finding a single user.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
    private readonly _findOneUser: FindOneUser,
  ) {}

  /**
   * Handles the update of a user item.
   *
   * @param id - The ID of the user item to update.
   * @param userUpdateDto - The data to update the user item with.
   * @returns The updated user item.
   * @throws NotFoundException if the user item with the specified ID is not found.
   */
  async handle(
    id: number,
    userUpdateDto: UserUpdateDto,
  ): Promise<UserResponseDto> {
    const exist = await this._findOneUser.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    const userUpdatePayload = this._mapper.map(
      userUpdateDto,
      UserUpdateDto,
      User,
    );

    const user = await this._userRepository.update(id, userUpdatePayload);

    const response = this._mapper.map(user, User, UserResponseDto);

    return response;
  }
}
