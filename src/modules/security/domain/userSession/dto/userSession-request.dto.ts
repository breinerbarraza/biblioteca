import { AutoMap } from '@automapper/classes';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
/**
 * A class representing a user request dto.
 */
export class UserSessionRequestDto {
  /**
   * UserSession sessionStart
   */
  @IsDateString()
  @AutoMap()
  sessionStart: Date;

  /**
   * UserSession sessionEnd
   */
  @IsDateString()
  @AutoMap()
  sessionEnd: Date;

  /**
   * UserSession pcName
   */
  @IsString()
  @AutoMap()
  pcName: string;

  /**
   * UserSession ipAddress
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  ipAddress: string;

  /**
   * UserSession duration
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  duration: number;
}
