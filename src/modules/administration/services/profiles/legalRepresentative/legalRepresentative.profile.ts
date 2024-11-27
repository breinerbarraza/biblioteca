/* istanbul ignore file */
import { LegalRepresentativeRequestDto } from '@app/modules/administration/domain/legalReprensentative/dto/legalRepresentative-request.dto';
import { LegalRepresentativeResponseDto } from '@app/modules/administration/domain/legalReprensentative/dto/legalRepresentative-response.dto';
import { LegalRepresentativeUpdateDto } from '@app/modules/administration/domain/legalReprensentative/dto/legalRePresentative-update.dto';
import { LegalRepresentative } from '@app/modules/administration/domain/legalReprensentative/legalRepresentative.entity';
import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * LegalRepresentative profile
 */
@Injectable()
export class LegalRepresentativeProfile extends AutomapperProfile {
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
      createMap(mapper, LegalRepresentative, LegalRepresentativeResponseDto);
      createMap(mapper, LegalRepresentativeRequestDto, LegalRepresentative);
      createMap(mapper, LegalRepresentativeUpdateDto, LegalRepresentative);
    };
  }
}
