/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { CompanyPerson } from '@app/modules/administration/domain/companyPerson/companyPerson.entity';
import { CompanyPersonResponseDto } from '@app/modules/administration/domain/companyPerson/dto/companyPerson-response.dto';
import { CompanyPersonRequestDto } from '@app/modules/administration/domain/companyPerson/dto/companyPerson-request.dto';
import { CompanyPersonUpdateDto } from '@app/modules/administration/domain/companyPerson/dto/companyPerson-update.dto';

/**
 * CompanyPerson profile
 */
@Injectable()
export class CompanyPersonProfile extends AutomapperProfile {
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
      createMap(mapper, CompanyPerson, CompanyPersonResponseDto);
      createMap(mapper, CompanyPersonRequestDto, CompanyPerson);
      createMap(mapper, CompanyPersonUpdateDto, CompanyPerson);
    };
  }
}
