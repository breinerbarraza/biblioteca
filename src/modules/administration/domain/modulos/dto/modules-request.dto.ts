import { AutoMap } from '@automapper/classes';
import { IsNumber, IsString } from 'class-validator';

/**
 * A class representing a module request dto.
 */
export class ModuleRequestDto {
  /**
   * module id
   */
  @IsNumber()
  @AutoMap()
  id: number;

  /**
   * Name
   */
  @IsString()
  @AutoMap()
  name: string;

  /**
   * Description
   */
  @IsString()
  @AutoMap()
  description: string;
}
