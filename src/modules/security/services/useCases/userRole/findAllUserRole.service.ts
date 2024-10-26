import { UserRoleResponseDto } from '@app/modules/security/domain/userRole/dto/userRole-response.dto';
import { UserRole } from '@app/modules/security/domain/userRole/userRole.entity';
import { UserRoleRepository } from '@app/modules/security/infrastructure/persistence/repositories/userRole/userRole.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all userRoles.
 */
@Injectable()
export class FindAllUserRole {
  /**
   * Constructs a new instance of the `FindAllUserRoleService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _userRoleRepository - The repository for accessing userRole data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRoleRepository: UserRoleRepository,
  ) {}

  /**
   * Handles the finding of all userRoles.
   * @returns A promise that resolves to an array of UserRoleResponseDto objects.
   */
  async handle(): Promise<UserRoleResponseDto[]> {
    const userRoles = await this._userRoleRepository.getAll();

    const response = this._mapper.mapArray(
      userRoles,
      UserRole,
      UserRoleResponseDto,
    );

    return response;
  }
}
