import { AutoMap } from '@automapper/classes';

/**
 * A class representing a userRole response dto.
 */
export class UserRoleResponseDto {
  /**
   * UserRole idRole
   */
  @AutoMap()
  id: number;

  /**
   * UserRole idUser
   */
  @AutoMap()
  idUser: number;

  /**
   * UserRole idRole
   */
  @AutoMap()
  idRole: number;

  /**
   * UserRole assignDate
   */
  @AutoMap()
  assignDate: Date;
}
