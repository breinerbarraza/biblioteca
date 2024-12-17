import { AutoMap } from '@automapper/classes';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * A class representing a content update dto.
 */
export class ContentUpdateDto {
    /**
     * Person id
     */
    @IsNumber()
    @IsOptional()
    @AutoMap()
    id: number;

    /**
     * Content idUser
     */
    @IsNumber()
    @IsOptional()
    @AutoMap()
    idUser: number;

    /**
     * Content title
     */
    @IsOptional()
    @IsString()
    @AutoMap()
    title: string;

    /**
     * Content description
     */
    @IsOptional()
    @IsString()
    @AutoMap()
    description: string;

    /**
     * Content type
     */
    @IsOptional()
    @IsString()
    @AutoMap()
    type: string;

    /**
     * Content url
     */
    @IsOptional()
    @IsString()
    @AutoMap()
    url: string;

    /**
     * Content uploadDate
     */
    @IsDateString()
    @IsOptional()
    @AutoMap()
    uploadDate: Date;
}
