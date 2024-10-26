import { RoleResponseDto } from '@app/modules/security/domain/role/dto/role-response.dto';
import { Role } from '@app/modules/security/domain/role/role.entity';
import { RoleRepository } from '@app/modules/security/infrastructure/persistence/repositories/role/role.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a role by its ID.
 */
@Injectable()
export class FindOneRole {
  /**
   * Constructs a new instance of the FindOneRoleService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _roleRepository - The repository for accessing role data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _roleRepository: RoleRepository,
  ) {}

  /**
   * Retrieves a role by its ID.
   *
   * @param id - The ID of the role to retrieve.
   * @returns A Promise that resolves to a RoleResponseDto object representing the retrieved role.
   */
  async handle(id: number): Promise<RoleResponseDto> {
    const role = await this._roleRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(role, Role, RoleResponseDto);

    return response;
  }
}
