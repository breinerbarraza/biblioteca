import { AutoMap } from '@automapper/classes';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * A class representing a user update dto.
 */
export class UserSessionUpdateDto {
  /**
   * UserSession sessionStart
   */
  @IsDateString()
  @IsOptional()
  @AutoMap()
  sessionStart: Date;

  /**
   * UserSession sessionEnd
   */
  @IsDateString()
  @IsOptional()
  @AutoMap()
  sessionEnd: Date;

  /**
   * UserSession pcName
   */
  @IsString()
  @IsOptional()
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
