/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Role } from '@app/modules/security/domain/role/role.entity';
import { RoleResponseDto } from '@app/modules/security/domain/role/dto/role-response.dto';
import { RoleRequestDto } from '@app/modules/security/domain/role/dto/role-request.dto';
import { RoleUpdateDto } from '@app/modules/security/domain/role/dto/role-update.dto';

/**
 * Role profile
 */
@Injectable()
export class RoleProfile extends AutomapperProfile {
  /**
   * Constructor
   * @param mapper
   */
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, Role, RoleResponseDto);
      createMap(mapper, RoleRequestDto, Role);
      createMap(mapper, RoleUpdateDto, Role);
    };
  }
}
