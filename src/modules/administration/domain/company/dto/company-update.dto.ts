import { LegalRepresentativeUpdateDto } from '@app/modules/administration/domain/legalRepresentative/dto/legalRePresentative-update.dto';
import { AutoMap } from '@automapper/classes';
import {
  IsEmail,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

/**
 * A class representing a todo update dto.
 */
export class CompanyUpdateDto {
  /**
   * Company idIdentificationType
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  idIdentificationType: number;

  /**
   * Company idState
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  idState: number;

  /**
   * Company identificationNumber
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  identificationNumber: number;

  /**
   * Company idTypeCompany
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  idTypeCompany: number;

  /**
   * Company dv
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  dv: string;

  /**
   * Company businessName
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  businessName: string;

  /**
   * Company companyName
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  companyName: string;

  /**
   * Company webPage
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  webPage: string;

  /**
   * Company name
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  name: string;

  /**
   * Company middleName
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  middleName: string;

  /**
   * Company firstSurname
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  firstSurname: string;

  /**
   * Company secondSurname
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  secondSurname: string;

  /**
   * Company fullName
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  fullName: string;

  /**
   * Company phone
   */
  @IsString()
  @AutoMap()
  phone: string;

  /**
   * Company email
   */
  @IsString()
  @IsEmail()
  @AutoMap()
  email: string;

  /**
   * Company fullAddress
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  fullAddress: string;

  /**
   * Company legalRepresentative
   */
  @IsObject()
  @IsOptional()
  @AutoMap()
  legalRepresentative: LegalRepresentativeUpdateDto;
}
