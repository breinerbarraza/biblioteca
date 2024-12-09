/* istanbul ignore file */
import { SubModuleRequestDto } from '@app/modules/administration/domain/subModule/dto/subModule-request.dto';
import { SubModuleResponseDto } from '@app/modules/administration/domain/subModule/dto/subModule-response.dto';
import { SubModuleUpdateDto } from '@app/modules/administration/domain/subModule/dto/subModule-update.dto';
import { SubModule } from '@app/modules/administration/domain/subModule/subModule.entity';
import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Sub Module profile
 */
@Injectable()
export class SubModuleProfile extends AutomapperProfile {
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
      createMap(mapper, SubModule, SubModuleResponseDto);
      createMap(mapper, SubModuleRequestDto, SubModule);
      createMap(mapper, SubModuleUpdateDto, SubModule);
    };
  }
}
