/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Company } from '@app/modules/administration/domain/Company/Company.entity';
import { CompanyResponseDto } from '@app/modules/administration/domain/Company/dto/Company-response.dto';
import { CompanyRequestDto } from '@app/modules/administration/domain/Company/dto/Company-request.dto';
import { CompanyUpdateDto } from '@app/modules/administration/domain/Company/dto/Company-update.dto';

/**
 * Company profile
 */
@Injectable()
export class CompanyProfile extends AutomapperProfile {
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
      createMap(mapper, Company, CompanyResponseDto);
      createMap(mapper, CompanyRequestDto, Company);
      createMap(mapper, CompanyUpdateDto, Company);
    };
  }
}
