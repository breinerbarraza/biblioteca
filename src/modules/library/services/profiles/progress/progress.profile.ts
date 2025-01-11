/* istanbul ignore file */
import { ContentDetail } from '@app/modules/library/domain/contentDetail/contentDetail.entity';
import { ContentDetailResponseDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-response.dto';
import { ProgressRequestDto } from '@app/modules/library/domain/progress/dto/progress-request.dto';
import { ProgressResponseDto } from '@app/modules/library/domain/progress/dto/progress-response.dto';
import { ProgressUpdateDto } from '@app/modules/library/domain/progress/dto/progress-update.dto';
import { Progress } from '@app/modules/library/domain/progress/progress.entity';
import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { User } from '@app/modules/security/domain/user/user.entity';
import { createMap, forMember, mapFrom, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Progress profile
 */
@Injectable()
export class ProgressProfile extends AutomapperProfile {
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
        Progress,
        ProgressResponseDto,
        forMember(
          (dest) => dest.user,
          mapFrom((src) =>
            mapper.map(src.user, User, UserResponseDto, { depth: 1 }),
          ),
        ),
        forMember(
          (dest) => dest.content,
          mapFrom((src) =>
            mapper.map(
              src.contentDetail,
              ContentDetail,
              ContentDetailResponseDto,
              {
                depth: 1,
              },
            ),
          ),
        ),
      );
      createMap(mapper, ProgressRequestDto, Progress);
      createMap(mapper, ProgressUpdateDto, Progress);
    };
  }
}
