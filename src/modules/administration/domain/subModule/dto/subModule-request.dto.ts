import { AutoMap } from '@automapper/classes';
import { IsNumber, IsString } from 'class-validator';

/**
 * A class representing a subModule request.
 */

export class SubModuleRequestDto {
  /**
   * subModule id
   */
  @IsNumber()
  @AutoMap()
  id: number;

  /**
   * idModule
   */
  @IsNumber()
  @AutoMap()
  idModule: number;

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
}
