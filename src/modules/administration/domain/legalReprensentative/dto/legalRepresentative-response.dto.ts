import { citiesResponseDto } from '@app/modules/utilitaria/domain/cities/dto/cities-response.dto';
import { IdentificationTypeResponseDto } from '@app/modules/utilitaria/domain/identificationType/dto/identificationType-response.dto';
import { AutoMap } from '@automapper/classes';
import { CompanyResponseDto } from '../../company/dto/company-response.dto';
import { GenderResponseDto } from '@app/modules/utilitaria/domain/genders/dto/genders-response.dto';

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
   * LegalRepresentative middle_name
   */

  @AutoMap()
  middleName: string;

  /**
   * LegalRepresentative firstSurname
   */
  @AutoMap()
  firstSurname: string;

  /**
   * LegalRepresentative secondLastName
   */

  @AutoMap()
  secondSurname: string;

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

  /**
   * LegalRepresentative identificationType
   */
  @AutoMap()
  identificationType?: IdentificationTypeResponseDto;

  /**
   * LegalRepresentative city
   */
  @AutoMap()
  cities?: citiesResponseDto;

  /**
   * LegalRepresentative genders
   */
  @AutoMap()
  genders?: GenderResponseDto;

  /**
   * LegalRepresentative identificationType
   */
  @AutoMap()
  company?: CompanyResponseDto;
}
