import { AutoMap } from '@automapper/classes';
import { IsNumber, IsOptional } from 'class-validator';

/**
 * A class representing a logAccess update dto.
 */
export class LogAccessUpdateDto {
    /**
     * logAccess idUser
     */
    @IsOptional()
    @IsNumber()
    @AutoMap()
    idUser: number;

    /**
     * logAccess idUser
     */
    @IsOptional()
    @IsNumber()
    @AutoMap()
    idContent: number;

    /**
     * logAccess uploadDate
     */
    @IsOptional()
    @AutoMap()
    accessDate: Date;
}
