/* istanbul ignore file */
import { Content } from '@app/modules/library/domain/content/content.entity';
import { ContentRequestDto } from '@app/modules/library/domain/content/dto/content-request.dto';
import { ContentResponseDto } from '@app/modules/library/domain/content/dto/content-response.dto';
import { ContentUpdateDto } from '@app/modules/library/domain/content/dto/content-update.dto';
import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { User } from '@app/modules/security/domain/user/user.entity';
import { createMap, forMember, mapFrom, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Content profile
 */
@Injectable()
export class ContentProfile extends AutomapperProfile {
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
        Content,
        ContentResponseDto,
        forMember(
          (dest) => dest.user,
          mapFrom((src) =>
            mapper.map(src.user, User, UserResponseDto, { depth: 1 }),
          ),
        ),
      );
      createMap(mapper, ContentRequestDto, Content);
      createMap(mapper, ContentUpdateDto, Content);
    };
  }
}
