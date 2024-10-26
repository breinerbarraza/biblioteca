import { RoleResponseDto } from '@app/modules/security/domain/role/dto/role-response.dto';
import { Role } from '@app/modules/security/domain/role/role.entity';
import { RoleRepository } from '@app/modules/security/infrastructure/persistence/repositories/role/role.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a role.
 */
@Injectable()
export class DeleteRole {
  /**
   * Constructs a new instance of the DeleteRoleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _roleRepository - The repository for accessing role data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _roleRepository: RoleRepository,
  ) {}

  /**
   * Handles the deletion of a role item.
   *
   * @param id - The ID of the role item to be deleted.
   * @returns A promise that resolves to a RoleResponseDto representing the deleted role item.
   */
  async handle(id: number): Promise<RoleResponseDto> {
    const role = await this._roleRepository.delete({
      id,
    });

    const response = this._mapper.map(role, Role, RoleResponseDto);

    return response;
  }
}
