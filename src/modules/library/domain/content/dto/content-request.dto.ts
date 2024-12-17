import { AutoMap } from '@automapper/classes';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

/**
 * A class representing a content request dto.
 */
export class ContentRequestDto {
    /**
     * content idUser
     */
    @IsNotEmpty()
    @IsNumber()
    @AutoMap()
    idUser: number;

    /**
     * content title
     */
    @IsNotEmpty()
    @IsString()
    @AutoMap()
    title: string;

    /**
     * content description
     */
    @IsNotEmpty()
    @IsString()
    @AutoMap()
    description: string;

    /**
     * content type
     */
    @IsNotEmpty()
    @IsString()
    @AutoMap()
    type: string;

    /**
     * content url
     */
    @IsNotEmpty()
    @IsString()
    @AutoMap()
    url: string;

    /**
     * content uploadDate
     */
    @IsDateString()
    @AutoMap()
    uploadDate: Date;
}
