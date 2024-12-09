/* istanbul ignore file */

import { CreateModulo } from './createModulos.service';
import { DeleteModulo } from './deleteModulos.service';
import { FindAllModule } from './findAllModulos.service';
import { FindOneModulo } from './findOneModulos.service';
import { UpdateModulo } from './updateMenu.service';

/**
 * Array of Menu use cases.
 */
export const MODULOS_USE_CASES = [
  CreateModulo,
  UpdateModulo,
  FindAllModule,
  FindOneModulo,
  DeleteModulo,
];
