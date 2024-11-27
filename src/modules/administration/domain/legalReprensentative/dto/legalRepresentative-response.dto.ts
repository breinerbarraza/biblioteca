import { AutoMap } from '@automapper/classes';

export class LegalRepresentativeResponseDto {
  /**
   * LegalRepresentative id
   */

  @AutoMap()
  id?: number;

  /**
   * LegalRepresentative idGender
   */
  @AutoMap()
  idGender: number;

  /**
   * LegalRepresentative idCity
   */
  @AutoMap()
  idCity: number;

  /**
   * LegalRepresentative idIdentificationType
   */
  @AutoMap()
  idIdentificationType: number;

  /**
   * LegalRepresentative idCompany
   */
  @AutoMap()
  idCompany: number;

  /**
   * LegalRepresentative idIdentificationType
   */
  @AutoMap()
  identificationNumber: number;

  /**
   * LegalRepresentative name
   */
  @AutoMap()
  name: string;

  /**
   * LegalRepresentative firstName
   */
  @AutoMap()
  firstName: string;

  /**
   * LegalRepresentative middle_name
   */

  @AutoMap()
  middleName: string;

  /**
   * LegalRepresentative lastName
   */
  @AutoMap()
  lastName: string;

  /**
   * LegalRepresentative secondLastName
   */

  @AutoMap()
  secondLastName: string;

  /**
   * LegalRepresentative fullName
   */
  @AutoMap()
  fullName: string;

  /**
   * LegalRepresentative email
   */
  @AutoMap()
  email: string;

  /**
   * LegalRepresentative phone
   */
  @AutoMap()
  phone: string;

  /**
   * LegalRepresentative state
   */
  @AutoMap()
  state: boolean;
}
