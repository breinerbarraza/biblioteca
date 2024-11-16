import { AutoMap } from '@automapper/classes';

/**
 * A class representing a person response dto.
 */
export class CompanyResponseDto {
  /**
   * Company id
   */
  @AutoMap()
  id: number;

  /**
   * Company idIdentificationType
   */
  @AutoMap()
  idIdentificationType: number;
  /**
   * Company idState
   */
  @AutoMap()
  idState: number;

  /**
   * Company dv
   */
  @AutoMap()
  dv: string;

  /**
   * Company business_name
   */
  @AutoMap()
  business_name: string;

  /**
   * Company Name
   */
  @AutoMap()
  Name: string;

  /**
   * Company middleName
   */
  @AutoMap()
  middleName: string;

  /**
   * Company firstSurname
   */
  @AutoMap()
  firstSurname: string;

  /**
   * Company secondSurname
   */
  @AutoMap()
  secondSurname: string;

  /**
   * Company fullName
   */
  @AutoMap()
  fullName: string;

  /**
   * Company phone
   */
  @AutoMap()
  phone: string;

  /**
   * Company email
   */
  @AutoMap()
  email: string;

  /**
   * Company email
   */
  @AutoMap()
  fullAddress: string;
}
