/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { LoginAttempt } from '@app/modules/security/domain/loginAttempt/loginAttempt.entity';
import { LoginAttemptResponseDto } from '@app/modules/security/domain/loginAttempt/dto/loginAttempt-response.dto';
import { LoginAttemptRequestDto } from '@app/modules/security/domain/loginAttempt/dto/loginAttempt-request.dto';
import { LoginAttemptUpdateDto } from '@app/modules/security/domain/loginAttempt/dto/loginAttempt-update.dto';

/**
 * LoginAttempt profile
 */
@Injectable()
export class LoginAttemptProfile extends AutomapperProfile {
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
      createMap(mapper, LoginAttempt, LoginAttemptResponseDto);
      createMap(mapper, LoginAttemptRequestDto, LoginAttempt);
      createMap(mapper, LoginAttemptUpdateDto, LoginAttempt);
    };
  }
}
