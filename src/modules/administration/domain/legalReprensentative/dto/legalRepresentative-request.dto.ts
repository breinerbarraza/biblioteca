import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class LegalRepresentativeRequestDto {
  /**
   * LegalRepresentative id
   */
  @IsNumber()
  @AutoMap()
  @IsOptional()
  id?: number;

  /**
   * LegalRepresentative idGender
   */
  @IsNumber()
  @AutoMap()
  idGender: number;

  /**
   * LegalRepresentative idCity
   */
  @IsNumber()
  @AutoMap()
  idCity: number;

  /**
   * LegalRepresentative idIdentificationType
   */
  @IsNumber()
  @AutoMap()
  idIdentificationType: number;

  /**
   * LegalRepresentative idCompany
   */
  @IsNumber()
  @AutoMap()
  idCompany: number;

  /**
   * LegalRepresentative idIdentificationType
   */
  @IsNumber()
  @AutoMap()
  identificationNumber: number;

  /**
   * LegalRepresentative name
   */
  @IsString()
  @IsString()
  @AutoMap()
  name: string;

  /**
   * LegalRepresentative firstName
   */
  @IsString()
  @IsString()
  @AutoMap()
  firstName: string;

  /**
   * LegalRepresentative middle_name
   */
  @IsString()
  @AutoMap()
  middleName: string;

  /**
   * LegalRepresentative lastName
   */
  @IsString()
  @AutoMap()
  lastName: string;

  /**
   * LegalRepresentative secondLastName
   */
  @IsString()
  @AutoMap()
  secondLastName: string;

  /**
   * LegalRepresentative fullName
   */
  @IsString()
  @AutoMap()
  fullName: string;

  /**
   * LegalRepresentative email
   */
  @IsString()
  @AutoMap()
  email: string;

  /**
   * LegalRepresentative phone
   */
  @IsString()
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
