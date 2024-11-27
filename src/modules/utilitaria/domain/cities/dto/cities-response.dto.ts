import { AutoMap } from '@automapper/classes';

/**
 * A class representing a cities ResponseDto.
 */

export class citiesResponseDto {
  /**
   * cities id
   */
  @AutoMap()
  id: number;

  /**
   * cities name
   */
  @AutoMap()
  name: string;

  /**
   * cities description
   */
  @AutoMap()
  codigo: string;
}
