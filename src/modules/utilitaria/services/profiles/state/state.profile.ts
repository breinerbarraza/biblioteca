/* istanbul ignore file */
import { State } from '@app/modules/utilitaria/domain/state/state.entity';
import { StateResponseDto } from '@app/modules/utilitaria/domain/state/dto/state-response.dto';
import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * State profile
 */
@Injectable()
export class StateProfile extends AutomapperProfile {
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
      createMap(mapper, State, StateResponseDto);
    };
  }
}
