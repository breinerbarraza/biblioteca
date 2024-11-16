import { AutoMap } from '@automapper/classes';
import {
  IsDateString,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

/**
 * A class representing a person request dto.
 */
export class PersonRequestDto {
  /**
   * Person idIdentificationType
   */
  @IsNumber()
  @AutoMap()
  idIdentificationType: number;

  /**
   * Person idCargo
   */
  @IsNumber()
  @AutoMap()
  idCargo: number;

  /**
   * Person idUser
   */
  @IsNumber()
  @AutoMap()
  idUser: number;

  /**
   * Person documentNumber
   */
  @IsString()
  @AutoMap()
  documentNumber: string;

  /**
   * Person name
   */
  @IsString()
  @AutoMap()
  name: string;

  /**
   * Person middleName
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  middleName: string;

  /**
   * Person firstSurname
   */
  @IsString()
  @AutoMap()
  firstSurname: string;

  /**
   * Person secondSurname
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  secondSurname: string;

  /**
   * Person fullName
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  fullName: string;

  /**
   * Person dateBirth
   */
  @IsDateString()
  @AutoMap()
  dateBirth: Date;

  /**
   * Person phone
   */
  @IsString()
  @AutoMap()
  phone: string;

  /**
   * Person email
   */
  @IsString()
  @IsEmail()
  @AutoMap()
  email: string;
}
