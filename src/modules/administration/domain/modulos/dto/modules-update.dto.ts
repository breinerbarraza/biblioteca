import { AutoMap } from '@automapper/classes';
import { IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * A class representing a module update dto.
 */
export class ModuleUpdateDto {
  /**
   * module id
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  id: number;

  /**
   * Name
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  name: string;

  /**
   * Description
   */
  @IsString()
  @IsOptional()
  @AutoMap()
  description: string;
}
