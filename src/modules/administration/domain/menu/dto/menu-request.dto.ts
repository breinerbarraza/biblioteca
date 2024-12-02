import { AutoMap } from '@automapper/classes';
import { IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * A class representing a menu request.
 */
export class MenuRequestDto {
  /**
   * Menu id
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  id?: number;

  /**
   * idSubModule
   */
  @IsNumber()
  @AutoMap()
  idSubModule: number;

  /**
   * name
   */
  @IsString()
  @AutoMap()
  name: string;

  /**
   * description
   */
  @IsString()
  @AutoMap()
  description: string;

  /**
   * description
   */
  @IsString()
  @AutoMap()
  url: string;
}
