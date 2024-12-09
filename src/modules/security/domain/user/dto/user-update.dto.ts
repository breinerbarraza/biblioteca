import { PersonUpdateDto } from '@app/modules/administration/domain/person/dto/person-update.dto';
import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

/**
 * A class representing a user update dto.
 */
export class UserUpdateDto extends PersonUpdateDto {
  /**
   * User userName
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  userName: string;

  /**
   * User email
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  email: string;

  /**
   * User password
   */
  @IsString()
  @IsEmail()
  @IsOptional()
  @AutoMap()
  password: string;

  /**
   * User state
   */
  @IsBoolean()
  @IsOptional()
  @AutoMap()
  state: boolean;

  /**
   * User failedAttempts
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  failedAttempts: number;

  /**
   * User idCompany
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  idCompany?: number;

  /**
   * User idRol
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  idRol?: number;
}
