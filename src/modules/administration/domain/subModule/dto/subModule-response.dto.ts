import { AutoMap } from '@automapper/classes';

/**
 * A class representing a subModule response.
 */

export class SubModuleResponseDto {
  /**
   * subModule id
   */
  @AutoMap()
  id: number;

  /**
   * idModule
   */
  @AutoMap()
  idModule: number;

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
}
