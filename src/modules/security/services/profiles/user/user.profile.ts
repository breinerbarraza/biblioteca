/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { User } from '@app/modules/security/domain/user/user.entity';
import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { UserRequestDto } from '@app/modules/security/domain/user/dto/user-request.dto';
import { UserUpdateDto } from '@app/modules/security/domain/user/dto/user-update.dto';

/**
 * User profile
 */
@Injectable()
export class UserProfile extends AutomapperProfile {
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
      createMap(
        mapper,
        User,
        UserResponseDto,
        forMember(
          (destination) => destination.persons,
          mapFrom((source) => source.persons),
        ),
        forMember(
          (destination) => destination.userRole,
          mapFrom((source) => source.userRole),
        ),
      );
      createMap(mapper, UserRequestDto, User);
      createMap(mapper, UserUpdateDto, User);
    };
  }
}
