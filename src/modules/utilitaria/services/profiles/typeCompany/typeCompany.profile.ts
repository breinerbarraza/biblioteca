/* istanbul ignore file */
import { TypeCompany } from '@app/modules/utilitaria/domain/typeCompany/typeCompany.entity';
import { TypeCompanyResponseDto } from '@app/modules/utilitaria/domain/typeCompany/dto/typeCompany-response.dto';
import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * TypeCompany profile
 */
@Injectable()
export class TypeCompanyProfile extends AutomapperProfile {
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
      createMap(mapper, TypeCompany, TypeCompanyResponseDto);
    };
  }
}
