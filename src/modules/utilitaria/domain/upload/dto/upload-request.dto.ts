import { AutoMap } from '@automapper/classes';
import { IsNotEmpty } from 'class-validator';

/**
 * A class representing a upload request dto.
 */
export class UploadRequestDto {
  /**
   * folder
   */
  @IsNotEmpty()
  @AutoMap()
  folder: 'images' | 'videos' | 'documents';

  /**
   * type
   */
  @IsNotEmpty()
  @AutoMap()
  type: 'auto' | 'image' | 'video' | 'raw';

  /**
   * name
   */
  @IsNotEmpty()
  @AutoMap()
  name: string;

  /**
   * base64
   */
  @IsNotEmpty()
  @AutoMap()
  base64: string;
}
