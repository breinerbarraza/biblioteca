import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { AutoMap } from '@automapper/classes';
import { ContentResponseDto } from '../../content/dto/content-response.dto';
import { ApiProperty } from '@nestjs/swagger';

/**
 * A class representing a pogress response dto.
 */
export class ProgressResponseDto {
    /**
    * pogress id
    */
    @AutoMap()
    id: number;

    /**
     * pogress idUser
     */
    @ApiProperty({ type: () => UserResponseDto })
    @AutoMap(()=> UserResponseDto)
    user?: UserResponseDto;

    /**
     * pogress idContent
     */
    @ApiProperty({ type: () => ContentResponseDto })
    @AutoMap(()=> ContentResponseDto)
    content?: ContentResponseDto;

    
    /**
     * pogress percentage
     */
    @AutoMap()
    percentage: number;

    /**
     * pogress dateLastAccess
     */
    @AutoMap()
    dateLastAccess: Date;
}
