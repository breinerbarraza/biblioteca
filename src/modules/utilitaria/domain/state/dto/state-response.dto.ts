import { AutoMap } from '@automapper/classes';

/**
 * A class representing a State response dto.
 */
export class StateResponseDto {
  /**
   * State id
   */
  @AutoMap()
  id: number;

  /**
   * State name
   */
  @AutoMap()
  name: string;

  /**
   * State description
   */
  @AutoMap()
  description: string;
}
