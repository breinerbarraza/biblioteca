import { AutoMap } from '@automapper/classes';

/**
 * A class representing a role response dto.
 */
export class RoleResponseDto {
  /**
   * Role id
   */
  @AutoMap()
  id: number;

  /**
   * Role name
   */
  @AutoMap()
  name: string;

  /**
   * Role description
   */
  @AutoMap()
  description: string;
  /**
   * Role state
   */
  @AutoMap()
  state: boolean;
}
