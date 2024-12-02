import { AutoMap } from '@automapper/classes';
import { IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * A class representing a menu update.
 */
export class MenuUpdateDto {
  /**
   * Menu id
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  id: number;

  /**
   * idSubModule
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  idSubModule: number;

  /**
   * name
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  name: string;

  /**
   * description
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  description: string;

  /**
   * description
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  url: string;
}
