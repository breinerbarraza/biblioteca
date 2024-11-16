import { AutoMap } from '@automapper/classes';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsDateString,
  IsEmail,
} from 'class-validator';

/**
 * A class representing a todo update dto.
 */
export class PersonUpdateDto {
  /**
   * Person id
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  id: number;

  /**
   * Person idIdentificationType
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  idIdentificationType: number;
  /**
   * Person idCargo
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  idCargo: number;

  /**
   * Person idUser
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  idUser: number;

  /**
   * Person documentNumber
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  documentNumber: string;

  /**
   * Person name
   */
  @IsString()
  @IsOptional()
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
  @IsOptional()
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
  @IsOptional()
  @AutoMap()
  dateBirth: Date;

  /**
   * Person phone
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  phone: string;

  /**
   * Person email
   */
  @IsString()
  @IsEmail()
  @IsOptional()
  @AutoMap()
  email: string;
}
