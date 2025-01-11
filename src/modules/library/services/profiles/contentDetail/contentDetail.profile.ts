/* istanbul ignore file */
import { ContentDetail } from '@app/modules/library/domain/contentDetail/contentDetail.entity';
import { ContentDetailRequestDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-request.dto';
import { ContentDetailResponseDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-response.dto';
import { ContentDetailUpdateDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-update.dto';
import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Content profile
 */
@Injectable()
export class ContentDetailProfile extends AutomapperProfile {
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
      createMap(mapper, ContentDetail, ContentDetailResponseDto);
      createMap(mapper, ContentDetailRequestDto, ContentDetail);
      createMap(mapper, ContentDetailUpdateDto, ContentDetail);
    };
  }
}
