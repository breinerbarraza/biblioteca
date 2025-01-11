import { ContentDetailResponseDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-response.dto';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

/**
 * A class representing a content response dto.
 */
export class ContentResponseDto {
  /**
   * content id
   */
  @AutoMap()
  id: number;

  /**
   * content idContentDetail
   */
  @ApiProperty({ type: () => ContentDetailResponseDto })
  @AutoMap(() => ContentDetailResponseDto)
  contentDetail?: ContentDetailResponseDto;

  /**
   * content title
   */
  @AutoMap()
  title: string;

  /**
   * content description
   */
  @AutoMap()
  description: string;

  /**
   * content type
   */
  @AutoMap()
  type: string;

  /**
   * content url
   */
  @AutoMap()
  url: string;

  /**
   * content uploadDate
   */
  @AutoMap()
  uploadDate: Date;
}
