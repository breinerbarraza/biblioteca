import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';
/**
 * A class representing a loginAttempt request dto.
 */
export class LoginAttemptRequestDto {
  /**
   * LoginAttempt attemptsAt
   */
  @IsDateString()
  @IsOptional()
  @AutoMap()
  attemptsAt: string;

  /**
   * LoginAttempt successful
   */
  @IsBoolean()
  @IsOptional()
  @AutoMap()
  successful: boolean;

  /**
   * LoginAttempt ipAddress
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  ipAddress: string;

  /**
   * LoginAttempt pcName
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  pcName: string;
}
