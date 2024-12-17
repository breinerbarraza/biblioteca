import { AutoMap } from '@automapper/classes';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

/**
 * A class representing a logAccess request dto.
 */
export class LogAccessRequestDto {
    /**
     * logAccess idUser
     */
    @IsNotEmpty()
    @IsNumber()
    @AutoMap()
    idUser: number;

    /**
     * logAccess idUser
     */
    @IsNotEmpty()
    @IsNumber()
    @AutoMap()
    idContent: number;

    /**
     * logAccess uploadDate
     */
    @IsDateString()
    @AutoMap()
    accessDate: Date;
}
