import { UserRoleResponseDto } from '@app/modules/security/domain/userRole/dto/userRole-response.dto';
import { UserRole } from '@app/modules/security/domain/userRole/userRole.entity';
import { UserRoleRepository } from '@app/modules/security/infrastructure/persistence/repositories/userRole/userRole.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a userRole.
 */
@Injectable()
export class DeleteUserRole {
  /**
   * Constructs a new instance of the DeleteUserRoleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userRoleRepository - The repository for accessing userRole data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRoleRepository: UserRoleRepository,
  ) {}

  /**
   * Handles the deletion of a userRole item.
   *
   * @param id - The ID of the userRole item to be deleted.
   * @returns A promise that resolves to a UserRoleResponseDto representing the deleted userRole item.
   */
  async handle(id: number): Promise<UserRoleResponseDto> {
    const userRole = await this._userRoleRepository.delete({
      id,
    });

    const response = this._mapper.map(userRole, UserRole, UserRoleResponseDto);

    return response;
  }
}
