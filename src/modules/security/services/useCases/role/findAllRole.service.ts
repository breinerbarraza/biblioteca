import { RoleResponseDto } from '@app/modules/security/domain/role/dto/role-response.dto';
import { Role } from '@app/modules/security/domain/role/role.entity';
import { RoleRepository } from '@app/modules/security/infrastructure/persistence/repositories/role/role.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all roles.
 */
@Injectable()
export class FindAllRole {
  /**
   * Constructs a new instance of the `FindAllRoleService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _roleRepository - The repository for accessing role data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _roleRepository: RoleRepository,
  ) {}

  /**
   * Handles the finding of all roles.
   * @returns A promise that resolves to an array of RoleResponseDto objects.
   */
  async handle(): Promise<RoleResponseDto[]> {
    const roles = await this._roleRepository.getAll();

    const response = this._mapper.mapArray(roles, Role, RoleResponseDto);

    return response;
  }
}
