import { AutoMap } from '@automapper/classes';

/**
 * A class representing a menu response.
 */
export class MenuResponseDto {
  /**
   * Menu id
   */
  @AutoMap()
  id: number;

  /**
   * idSubModule
   */
  @AutoMap()
  idSubModule: number;

  /**
   * name
   */
  @AutoMap()
  name: string;

  /**
   * description
   */
  @AutoMap()
  description: string;

  /**
   * description
   */
  @AutoMap()
  url: string;
}
