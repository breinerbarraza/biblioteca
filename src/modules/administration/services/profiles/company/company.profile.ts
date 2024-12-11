/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Company } from '@app/modules/administration/domain/company/company.entity';
import { CompanyResponseDto } from '@app/modules/administration/domain/company/dto/company-response.dto';
import { CompanyRequestDto } from '@app/modules/administration/domain/company/dto/company-request.dto';
import { CompanyUpdateDto } from '@app/modules/administration/domain/company/dto/company-update.dto';

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
      createMap(
        mapper,
        Company,
        CompanyResponseDto,
        forMember(
          (x) => x?.legalRepresentative,
          mapFrom((y) => y?.legalRepresentative),
        ),
        forMember(
          (x) => x?.identificationType,
          mapFrom((y) => y?.identificationType),
        ),
        forMember(
          (y) => y?.typeCompany,
          mapFrom((x) => x?.typeCompany),
        ),
        forMember(
          (y) => y?.state,
          mapFrom((x) => x?.state),
        ),
      );
      createMap(mapper, CompanyRequestDto, Company);
      createMap(mapper, CompanyUpdateDto, Company);
    };
  }
}
