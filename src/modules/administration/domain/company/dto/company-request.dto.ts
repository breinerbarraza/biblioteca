import { AutoMap } from '@automapper/classes';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * A class representing a company request dto.
 */
export class CompanyRequestDto {
  /**
   * Company idIdentificationType
   */
  @IsNumber()
  @AutoMap()
  idIdentificationType: number;

  /**
   * Company idState
   */
  @IsNumber()
  @AutoMap()
  idState: number;

  /**
   * Company identificationNumber
   */
  @IsNumber()
  @AutoMap()
  identificationNumber: number;

  /**
   * Company idTypeCompany
   */
  @IsNumber()
  @AutoMap()
  idTypeCompany: number;

  /**
   * Company dv
   */
  @IsString()
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
   * Company email
   */
  @IsString()
  @AutoMap()
  fullAddress: string;
}
