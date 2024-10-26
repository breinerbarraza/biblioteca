/* istanbul ignore file */
import { Cargo } from '@app/modules/utilitaria/domain/cargo/cargo.entity';
import { CargoResponseDto } from '@app/modules/utilitaria/domain/cargo/dto/cargo-response.dto';
import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Cargo profile
 */
@Injectable()
export class CargoProfile extends AutomapperProfile {
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
      createMap(mapper, Cargo, CargoResponseDto);
    };
  }
}
