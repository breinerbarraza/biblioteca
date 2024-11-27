import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class LegalRepresentativeUpdateDto {
  /**
   * LegalRepresentative id
   */
  @IsNumber()
  @AutoMap()
  @IsOptional()
  id?: number;

  /**
   * LegalRepresentative idState
   */
  @IsNumber()
  @AutoMap()
  @IsOptional()
  idState: number;

  /**
   * LegalRepresentative idGender
   */
  @IsNumber()
  @AutoMap()
  @IsOptional()
  idGender: number;

  /**
   * LegalRepresentative idCity
   */
  @IsNumber()
  @AutoMap()
  @IsOptional()
  idCity: number;

  /**
   * LegalRepresentative idIdentificationType
   */
  @IsNumber()
  @AutoMap()
  @IsOptional()
  idIdentificationType: number;

  /**
   * LegalRepresentative idCompany
   */
  @IsNumber()
  @AutoMap()
  @IsOptional()
  idCompany: number;

  /**
   * LegalRepresentative idIdentificationType
   */
  @IsNumber()
  @AutoMap()
  @IsOptional()
  identificationNumber: number;

  /**
   * LegalRepresentative name
   */
  @IsNumber()
  @IsString()
  @AutoMap()
  @IsOptional()
  name: string;

  /**
   * LegalRepresentative firstName
   */
  @IsNumber()
  @IsString()
  @AutoMap()
  @IsOptional()
  firstName: string;

  /**
   * LegalRepresentative middle_name
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  middleName: string;

  /**
   * LegalRepresentative lastName
   */
  @IsString()
  @AutoMap()
  @IsOptional()
  lastName: string;

  /**
   * LegalRepresentative secondLastName
   */
  @IsString()
  @AutoMap()
  @IsOptional()
  secondLastName: string;

  /**
   * LegalRepresentative fullName
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  fullName: string;

  /**
   * LegalRepresentative email
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  email: string;

  /**
   * LegalRepresentative phone
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  phone: string;

  /**
   * LegalRepresentative state
   */
  @IsBoolean()
  @IsOptional()
  @AutoMap()
  state: boolean;
}
