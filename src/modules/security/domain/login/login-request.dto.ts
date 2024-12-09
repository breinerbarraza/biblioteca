import { AutoMap } from '@automapper/classes';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

/**
 * A class representing a login request dto.
 */
export class LoginRequestDto {
  /**
   * Login email
   */
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @AutoMap()
  email: string;

  /**
   * Login password
   */
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  password: string;
}
