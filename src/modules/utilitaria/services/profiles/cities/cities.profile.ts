/* istanbul ignore file */
import { Cities } from '@app/modules/utilitaria/domain/cities/cities.entity';
import { citiesResponseDto } from '@app/modules/utilitaria/domain/cities/dto/cities-response.dto';
import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Cities profile
 */
@Injectable()
export class CitiesProfile extends AutomapperProfile {
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
      createMap(mapper, Cities, citiesResponseDto);
    };
  }
}
