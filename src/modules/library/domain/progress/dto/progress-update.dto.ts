import { AutoMap } from '@automapper/classes';
import { IsNumber, IsOptional } from 'class-validator';

/**
 * A class representing a progress update dto.
 */
export class ProgressUpdateDto {
    /**
     * progress idUser
     */
    @IsOptional()
    @IsNumber()
    @AutoMap()
    idUser: number;

    /**
     * progress idUser
     */
    @IsOptional()
    @IsNumber()
    @AutoMap()
    idContent: number;

    /**
     * progress idUser
     */
    @IsOptional()
    @IsNumber()
    @AutoMap()
    percentage: number;

    /**
     * progress dateLastAccess
     */
    @IsOptional()
    @AutoMap()
    accessDate: Date;
}
