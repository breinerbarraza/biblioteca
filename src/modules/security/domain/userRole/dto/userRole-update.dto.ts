import { AutoMap } from '@automapper/classes';
import { IsDateString, IsNumber, IsOptional } from 'class-validator';

/**
 * A class representing a userRole update dto.
 */
export class UserRoleUpdateDto {
  /**
   * UserRole idRole
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  idRole: number;

  /**
   * UserRole assignDate
   */
  @IsDateString()
  @IsOptional()
  @AutoMap()
  assignDate: Date;
}
