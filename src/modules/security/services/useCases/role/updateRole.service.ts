import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { RoleResponseDto } from '@app/modules/security/domain/role/dto/role-response.dto';
import { Role } from '@app/modules/security/domain/role/role.entity';
import { RoleRepository } from '@app/modules/security/infrastructure/persistence/repositories/role/role.repository';
import { RoleUpdateDto } from '@app/modules/security/domain/role/dto/role-update.dto';
import { FindOneRole } from '@app/modules/security/services/useCases/role/findOneRole.service';

/**
 * Service class for updating a role.
 */
@Injectable()
export class UpdateRole {
  /**
   * Constructs a new instance of the UpdateRoleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _roleRepository - The repository for accessing role data.
   * @param _findOneRole - The use case for finding a single role.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _roleRepository: RoleRepository,
    private readonly _findOneRole: FindOneRole,
  ) {}

  /**
   * Handles the update of a role item.
   *
   * @param id - The ID of the role item to update.
   * @param roleUpdateDto - The data to update the role item with.
   * @returns The updated role item.
   * @throws NotFoundException if the role item with the specified ID is not found.
   */
  async handle(
    id: number,
    roleUpdateDto: RoleUpdateDto,
  ): Promise<RoleResponseDto> {
    const exist = await this._findOneRole.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`Role with id ${id} not found`);
    }

    const roleUpdatePayload = this._mapper.map(
      roleUpdateDto,
      RoleUpdateDto,
      Role,
    );

    const role = await this._roleRepository.update(id, roleUpdatePayload);

    const response = this._mapper.map(role, Role, RoleResponseDto);

    return response;
  }
}
