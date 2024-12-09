import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { User } from '@app/modules/security/domain/user/user.entity';
import { UserRepository } from '@app/modules/security/infrastructure/persistence/repositories/user/user.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a user by its ID.
 */
@Injectable()
export class FindOneUser {
  /**
   * Constructs a new instance of the FindOneUserService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _userRepository - The repository for accessing user data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
  ) {}

  /**
   * Retrieves a user by its ID.
   *
   * @param id - The ID of the user to retrieve.
   * @returns A Promise that resolves to a UserResponseDto object representing the retrieved user.
   */
  async handle(id: number): Promise<UserResponseDto> {
    const user = await this._userRepository.findBy({
      where: { id },
      relations: {
        persons: {
          companyPerson: { company: true },
          cargo: true,
          identificationType: true,
        },
        userRole: { role: true },
      },
    });

    const response = this._mapper.map(user, User, UserResponseDto);

    return response;
  }
}
