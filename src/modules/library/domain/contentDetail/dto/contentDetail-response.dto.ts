import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

/**
 * A class representing a content response dto.
 */
export class ContentDetailResponseDto {
  /**
   * content id
   */
  @AutoMap()
  id: number;

  /**
   * content idUser
   */
  @ApiProperty({ type: () => UserResponseDto })
  @AutoMap(() => UserResponseDto)
  user?: UserResponseDto;

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
   * content uploadDate
   */
  @AutoMap()
  uploadDate: Date;
}
