import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/**
 * A class representing a login request dto.
 */
export class RecoveryPasswordRequestDto {
  /**
   * Recovery Password email
   */
  @IsNotEmpty()
  @IsNumber()
  @AutoMap()
  id: number;

  /**
   * Recovery Password password
   */
  @IsNotEmpty()
  @IsString()
  @AutoMap()
  password: string;
}
