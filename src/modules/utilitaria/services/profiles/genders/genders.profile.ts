/* istanbul ignore file */
import { GenderResponseDto } from '@app/modules/utilitaria/domain/genders/dto/genders-response.dto';
import { Genders } from '@app/modules/utilitaria/domain/genders/genders.entity';
import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Genders profile
 */
@Injectable()
export class GendersProfile extends AutomapperProfile {
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
      createMap(mapper, Genders, GenderResponseDto);
    };
  }
}
