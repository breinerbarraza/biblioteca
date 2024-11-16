import { AutoMap } from '@automapper/classes';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

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
   * Company dv
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  dv: string;

  /**
   * Company business_name
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  business_name: string;

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
  @IsOptional()
  @AutoMap()
  fullAddress: string;
}
