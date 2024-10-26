import { RoleRequestDto } from '@app/modules/security/domain/role/dto/role-request.dto';
import { RoleResponseDto } from '@app/modules/security/domain/role/dto/role-response.dto';
import { Role } from '@app/modules/security/domain/role/role.entity';
import { RoleRepository } from '@app/modules/security/infrastructure/persistence/repositories/role/role.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new role.
 */
@Injectable()
export class CreateRole {
  /**
   * Creates an instance of the CreateRoleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _roleRepository - The repository for managing Role entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _roleRepository: RoleRepository,
  ) {}

  /**
   * Handles the creation of a new role.
   *
   * @param createRoleDto - The data transfer object containing the role details.
   * @returns The response containing the created role.
   */
  async handle(roleRequestDto: RoleRequestDto): Promise<RoleResponseDto> {
    const rolePayload = this._mapper.map(roleRequestDto, RoleRequestDto, Role);

    const role = await this._roleRepository.create(rolePayload);

    const response = this._mapper.map(role, Role, RoleResponseDto);

    return response;
  }
}
