import { PersonRequestDto } from '@app/modules/administration/domain/person/dto/person-request.dto';
import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
/**
 * A class representing a user request dto.
 */
export class UserRequestDto extends PersonRequestDto {
  /**
   * User userName
   */
  @IsString()
  @AutoMap()
  userName: string;

  /**
   * User email
   */
  @IsString()
  @IsEmail()
  @AutoMap()
  email: string;

  /**
   * User password
   */
  @IsString()
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
