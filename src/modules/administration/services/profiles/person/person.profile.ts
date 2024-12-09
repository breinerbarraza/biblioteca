/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Person } from '@app/modules/administration/domain/person/person.entity';
import { PersonResponseDto } from '@app/modules/administration/domain/person/dto/person-response.dto';
import { PersonRequestDto } from '@app/modules/administration/domain/person/dto/person-request.dto';
import { PersonUpdateDto } from '@app/modules/administration/domain/person/dto/person-update.dto';

/**
 * Person profile
 */
@Injectable()
export class PersonProfile extends AutomapperProfile {
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
      createMap(mapper, Person, PersonResponseDto);
      createMap(mapper, PersonRequestDto, Person);
      createMap(mapper, PersonUpdateDto, Person);
    };
  }
}
