import { AutoMap } from '@automapper/classes';
import { SubModuleResponseDto } from '../../subModule/dto/subModule-response.dto';

/**
 * A class representing a module response dto.
 */
export class ModuleResponseDto {
  /**
   * module id
   */
  @AutoMap()
  id: number;

  /**
   * Name
   */

  @AutoMap()
  name: string;

  /**
   * Description
   */

  @AutoMap()
  description: string;

  /**
   * subModules
   */
  @AutoMap(() => SubModuleResponseDto)
  subModules?: SubModuleResponseDto[];
}
