import { AutoMap } from '@automapper/classes';

/**
 * A class representing a upload response dto.
 */
export class UploadResponseDto {
  /**
   * message
   */
  @AutoMap()
  message: string;

  /**
   * url
   */
  @AutoMap()
  url: string;
}
