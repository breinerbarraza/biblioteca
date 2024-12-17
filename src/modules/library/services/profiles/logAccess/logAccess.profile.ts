/* istanbul ignore file */
import { Content } from '@app/modules/library/domain/content/content.entity';
import { ContentResponseDto } from '@app/modules/library/domain/content/dto/content-response.dto';
import { LogAccessRequestDto } from '@app/modules/library/domain/logAccess/dto/logAccess-request.dto';
import { LogAccessResponseDto } from '@app/modules/library/domain/logAccess/dto/logAccess-response.dto';
import { LogAccessUpdateDto } from '@app/modules/library/domain/logAccess/dto/logAccess-update.dto';
import { LogAccess } from '@app/modules/library/domain/logAccess/logAccess.entity';
import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { User } from '@app/modules/security/domain/user/user.entity';
import { createMap, forMember, mapFrom, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * LogAccess profile
 */
@Injectable()
export class LogAccessProfile extends AutomapperProfile {
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
        LogAccess,
        LogAccessResponseDto,
        forMember(
          (dest) => dest.user,
          mapFrom((src) =>
            mapper.map(src.user, User,UserResponseDto, { depth: 1 }),
          ),
        ),
        forMember(
          (dest) => dest.content,
          mapFrom((src) =>
            mapper.map(src.content, Content,ContentResponseDto, { depth: 1 }),
          ),
        ),
      );
      createMap(mapper, LogAccessRequestDto, LogAccess);
      createMap(mapper, LogAccessUpdateDto, LogAccess);
    };
  }
}
