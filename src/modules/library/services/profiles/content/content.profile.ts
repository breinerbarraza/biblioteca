/* istanbul ignore file */
import { Content } from '@app/modules/library/domain/content/content.entity';
import { ContentRequestDto } from '@app/modules/library/domain/content/dto/content-request.dto';
import { ContentResponseDto } from '@app/modules/library/domain/content/dto/content-response.dto';
import { ContentUpdateDto } from '@app/modules/library/domain/content/dto/content-update.dto';
import { createMap, type Mapper } from '@automapper/core';
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
      createMap(mapper, Content, ContentResponseDto);
      createMap(mapper, ContentRequestDto, Content);
      createMap(mapper, ContentUpdateDto, Content);
    };
  }
}
