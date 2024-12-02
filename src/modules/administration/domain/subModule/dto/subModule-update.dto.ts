import { AutoMap } from '@automapper/classes';
import { IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * A class representing a subModule response.
 */

export class SubModuleUpdateDto {
  /**
   * subModule id
   */
  @IsOptional()
  @IsNumber()
  @AutoMap()
  id: number;

  /**
   * idModule
   */
  @IsOptional()
  @IsNumber()
  @AutoMap()
  idModule: number;

  /**
   * name
   */
  @IsOptional()
  @IsString()
  @AutoMap()
  name: string;

  /**
   * description
   */
  @IsOptional()
  @IsString()
  @AutoMap()
  description: string;
}
