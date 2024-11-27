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
   * Person firstName
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  firstName: string;

  /**
   * Person middleName
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  middleName: string;

  /**
   * Person firstLastName
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  firstLastName: string;

  /**
   * Person middleLastName
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  middleLastName: string;

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
