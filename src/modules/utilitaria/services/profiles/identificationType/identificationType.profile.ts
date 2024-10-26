/* istanbul ignore file */
import { IdentificationType } from '@app/modules/utilitaria/domain/identificationType/identificationType.entity';
import { IdentificationTypeResponseDto } from '@app/modules/utilitaria/domain/identificationType/dto/identificationType-response.dto';
import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * IdentificationType profile
 */
@Injectable()
export class IdentificationTypeProfile extends AutomapperProfile {
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
      createMap(mapper, IdentificationType, IdentificationTypeResponseDto);
    };
  }
}
