/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Person } from '@app/modules/administration/domain/person/person.entity';
import { PersonResponseDto } from '@app/modules/administration/domain/person/dto/person-response.dto';
import { PersonRequestDto } from '@app/modules/administration/domain/person/dto/person-request.dto';
import { PersonUpdateDto } from '@app/modules/administration/domain/person/dto/person-update.dto';
import { IdentificationType } from '@app/modules/utilitaria/domain/identificationType/identificationType.entity';
import { IdentificationTypeResponseDto } from '@app/modules/utilitaria/domain/identificationType/dto/identificationType-response.dto';
import { State } from '@app/modules/utilitaria/domain/state/state.entity';
import { StateResponseDto } from '@app/modules/utilitaria/domain/state/dto/state-response.dto';
import { Cargo } from '@app/modules/utilitaria/domain/cargo/cargo.entity';
import { CargoResponseDto } from '@app/modules/utilitaria/domain/cargo/dto/cargo-response.dto';
import { User } from '@app/modules/security/domain/user/user.entity';
import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';

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
      createMap(mapper, Person, PersonResponseDto,
        forMember(
          (destination) => destination?.identificationType,
          mapFrom((source) => source?.identificationType),
        ),
        // forMember(
        //   (dest) => dest.state,
        //   mapFrom((src) =>
        //     mapper.map(src.state, State, StateResponseDto, { depth: 1 }),
        //   ),
        // ),
        // forMember(
        //   (dest) => dest.cargo,
        //   mapFrom((src) =>
        //     mapper.map(src.cargo, Cargo, CargoResponseDto, { depth: 1 }),
        //   ),
        // ),
        // forMember(
        //   (dest) => dest.user,
        //   mapFrom((src) =>
        //     mapper.map(src.user, User, UserResponseDto, { depth: 1 }),
        //   ),
        // ),
      );
      createMap(mapper, PersonRequestDto, Person);
      createMap(mapper, PersonUpdateDto, Person);
    };
  }
}
