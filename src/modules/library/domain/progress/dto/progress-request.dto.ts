import { AutoMap } from '@automapper/classes';
import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

/**
 * A class representing a progress request dto.
 */
export class ProgressRequestDto {
    /**
     * progress idUser
     */
    @IsNotEmpty()
    @IsNumber()
    @AutoMap()
    idUser: number;

    /**
     * progress idUser
     */
    @IsNotEmpty()
    @IsNumber()
    @AutoMap()
    idContent: number;
    
    /**
     * progress percentage
     */
    @IsNotEmpty()
    @IsNumber()
    @AutoMap()
    percentage: number;

    /**
     * progress dateLastAccess
     */
    @IsDateString()
    @AutoMap()
    dateLastAccess: Date;
}
