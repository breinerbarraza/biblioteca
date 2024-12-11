import { UserRequestDto } from '@app/modules/security/domain/user/dto/user-request.dto';
import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { User } from '@app/modules/security/domain/user/user.entity';
import { UserRepository } from '@app/modules/security/infrastructure/persistence/repositories/user/user.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a user.
 */
@Injectable()
export class DeleteUser {
  /**
   * Constructs a new instance of the DeleteUserService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userRepository - The repository for accessing user data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
  ) {}

  /**
   * Handles the deletion of a user item.
   *
   * @param id - The ID of the user item to be deleted.
   * @returns A promise that resolves to a UserResponseDto representing the deleted user item.
   */
  async handle(id: number, state: boolean): Promise<UserResponseDto> {
    const request = this._mapper.map(
      {
        userName: undefined,
        email: undefined,
        password: undefined,
        state,
        failedAttempts: undefined,
        idIdentificationType: undefined,
        idCargo: undefined,
        idUser: undefined,
        documentNumber: undefined,
        firstName: undefined,
        middleName: undefined,
        firstLastName: undefined,
        middleLastName: undefined,
        fullName: undefined,
        dateBirth: undefined,
        phone: undefined,
      },
      UserRequestDto,
      User,
    );

    const user = await this._userRepository.update(id, request);

    const response = this._mapper.map(user, User, UserResponseDto);

    return response;
  }
}
