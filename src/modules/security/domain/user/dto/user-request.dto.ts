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
export class UserRequestDto {
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
  @AutoMap()
  email: string;

  /**
   * User password
   */
  @IsString()
  @IsEmail()
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
}
