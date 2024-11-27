import { AutoMap } from '@automapper/classes';

/**
 * A class representing a gender response dto.
 */
export class GenderResponseDto {
  /**
   * Gender id
   */
  @AutoMap()
  id: number;

  /**
   * Gender name
   */
  @AutoMap()
  name: string;

  /**
   * Gender description
   */
  @AutoMap()
  description: string;
}
