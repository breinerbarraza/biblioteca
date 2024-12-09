import { LegalRepresentativeResponseDto } from '@app/modules/administration/domain/legalReprensentative/dto/legalRepresentative-response.dto';
import { IdentificationTypeResponseDto } from '@app/modules/utilitaria/domain/identificationType/dto/identificationType-response.dto';
import { StateResponseDto } from '@app/modules/utilitaria/domain/state/dto/state-response.dto';
import { TypeCompanyResponseDto } from '@app/modules/utilitaria/domain/typeCompany/dto/typeCompany-response.dto';
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
   * Company identificationNumber
   */
  @AutoMap()
  identificationNumber: number;

  /**
   * Company idTypeCompany
   */
  @AutoMap()
  idTypeCompany: number;

  /**
   * Company dv
   */
  @AutoMap()
  dv: string;

  /**
   * Company businessName
   */
  @AutoMap()
  businessName: string;

  /**
   * Company companyName
   */
  @AutoMap()
  companyName: string;

  /**
   * Company webPage
   */
  @AutoMap()
  webPage: string;

  /**
   * Company name
   */
  @AutoMap()
  name: string;

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
   * Company fullAddress
   */
  @AutoMap()
  fullAddress: string;

  /**
   * Company legalRepresentative
   */
  @AutoMap()
  legalRepresentative?: LegalRepresentativeResponseDto;

  /**
   * Company typeCompany
   */
  @AutoMap()
  typeCompany?: TypeCompanyResponseDto;

  /**
   * Company identificationType
   */
  @AutoMap()
  identificationType?: IdentificationTypeResponseDto;

  /**
   * Company state
   */
  @AutoMap()
  state?: StateResponseDto;
}
