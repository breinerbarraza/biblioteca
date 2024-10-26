import { AutoMap } from '@automapper/classes';

/**
 * A class representing a cargo response dto.
 */
export class CargoResponseDto {
  /**
   * Cargo id
   */
  @AutoMap()
  id: number;

  /**
   * Cargo name
   */
  @AutoMap()
  name: string;

  /**
   * Cargo description
   */
  @AutoMap()
  description: string;
}
