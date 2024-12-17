import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { AutoMap } from '@automapper/classes';
import { ContentResponseDto } from '../../content/dto/content-response.dto';
import { ApiProperty } from '@nestjs/swagger';

/**
 * A class representing a logAccess response dto.
 */
export class LogAccessResponseDto {
    /**
    * logAccess id
    */
    @AutoMap()
    id: number;

    /**
     * logAccess idUser
     */
    @ApiProperty({ type: () => UserResponseDto })
    @AutoMap(()=> UserResponseDto)
    user?: UserResponseDto;

    /**
     * logAccess idContent
     */
    @ApiProperty({ type: () => ContentResponseDto })
    @AutoMap(()=> ContentResponseDto)
    content?: ContentResponseDto;

    /**
     * logAccess accessDate
     */
    @AutoMap()
    accessDate: Date;
}
