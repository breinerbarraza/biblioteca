import { AutoMap } from '@automapper/classes';
import { IsDateString, IsNumber } from 'class-validator';
/**
 * A class representing a userRole request dto.
 */
export class UserRoleRequestDto {
  /**
   * UserRole idRole
   */
  @IsNumber()
  @AutoMap()
  idRole: number;

  /**
   * UserRole assignDate
   */
  @IsDateString()
  @AutoMap()
  assignDate: Date;
}
