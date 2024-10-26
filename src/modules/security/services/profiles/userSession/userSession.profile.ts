/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { UserSession } from '@app/modules/security/domain/userSession/userSession.entity';
import { UserSessionResponseDto } from '@app/modules/security/domain/userSession/dto/userSession-response.dto';
import { UserSessionRequestDto } from '@app/modules/security/domain/userSession/dto/userSession-request.dto';
import { UserSessionUpdateDto } from '@app/modules/security/domain/userSession/dto/userSession-update.dto';

/**
 * UserSession profile
 */
@Injectable()
export class UserSessionProfile extends AutomapperProfile {
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
      createMap(mapper, UserSession, UserSessionResponseDto);
      createMap(mapper, UserSessionRequestDto, UserSession);
      createMap(mapper, UserSessionUpdateDto, UserSession);
    };
  }
}
