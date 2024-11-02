import { AutoMap } from '@automapper/classes';

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
   * Person idIdentificationType
   */
  @AutoMap()
  idIdentificationType: number;
  /**
   * Person idCargo
   */
  @AutoMap()
  idCargo: number;

  /**
   * Person idUser
   */
  @AutoMap()
  idUser: number;

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
   * Person firdtLastName
   */
  @AutoMap()
  firdtLastName: string;

  /**
   * Person middleLastName
   */
  @AutoMap()
  middleLastName: string;

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
}
