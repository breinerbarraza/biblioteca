import { AutoMap } from '@automapper/classes';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsEmail,
  IsBoolean,
} from 'class-validator';

/**
 * A class representing a user update dto.
 */
export class UserUpdateDto {
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
}
