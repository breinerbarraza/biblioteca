/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { UserRole } from '@app/modules/security/domain/userRole/userRole.entity';
import { UserRoleResponseDto } from '@app/modules/security/domain/userRole/dto/userRole-response.dto';
import { UserRoleRequestDto } from '@app/modules/security/domain/userRole/dto/userRole-request.dto';
import { UserRoleUpdateDto } from '@app/modules/security/domain/userRole/dto/userRole-update.dto';

/**
 * UserRole profile
 */
@Injectable()
export class UserRoleProfile extends AutomapperProfile {
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
      createMap(mapper, UserRole, UserRoleResponseDto);
      createMap(mapper, UserRoleRequestDto, UserRole);
      createMap(mapper, UserRoleUpdateDto, UserRole);
    };
  }
}
