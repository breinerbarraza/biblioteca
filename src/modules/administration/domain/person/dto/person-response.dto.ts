import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { CargoResponseDto } from '@app/modules/utilitaria/domain/cargo/dto/cargo-response.dto';
import { IdentificationTypeResponseDto } from '@app/modules/utilitaria/domain/identificationType/dto/identificationType-response.dto';
import { StateResponseDto } from '@app/modules/utilitaria/domain/state/dto/state-response.dto';
import { AutoMap } from '@automapper/classes';
import { CompanyPersonResponseDto } from '../../companyPerson/dto/companyPerson-response.dto';

/**
 * A class representing a person response dto.
 */
export class PersonResponseDto {
  /**
   * Person id
   */
  @AutoMap()
  id: number;

  /**
   * Person documentNumber
   */
  @AutoMap()
  documentNumber: string;

  /**
   * Person firstName
   */
  @AutoMap()
  firstName: string;

  /**
   * Person middleName
   */
  @AutoMap()
  middleName: string;

  /**
   * Person firstLastName
   */
  @AutoMap()
  firstLastName: string;

  /**
   * Person middleLastName
   */
  @AutoMap()
  middleLastName: string;

  /**
   * Person fullName
   */
  @AutoMap()
  fullName: string;

  /**
   * Person dateBirth
   */
  @AutoMap()
  dateBirth: Date;

  /**
   * Person phone
   */
  @AutoMap()
  phone: string;

  /**
   * Person email
   */
  @AutoMap()
  email: string;

  /**
   * Person state
   */
  @AutoMap()
  state: boolean;

  /**
   * Person companyPerson
   */
  @AutoMap()
  companyPerson?: CompanyPersonResponseDto[];

  /**
   * Person identificationType
   */
  @AutoMap()
  identificationType?: IdentificationTypeResponseDto;
}
