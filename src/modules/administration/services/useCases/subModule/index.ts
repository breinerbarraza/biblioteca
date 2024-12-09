/* istanbul ignore file */

import { CreateSubModule } from './createSubModule.service';
import { DeleteSubModule } from './deleteSubModule.service';
import { FindAllSubModule } from './findAllSubModule.service';
import { FindOneSubModule } from './findOneSubModule.service';
import { UpdateSubModule } from './updateSubModule.service';

/**
 * Array of Menu use cases.
 */
export const SUBMODULOS_USE_CASES = [
  CreateSubModule,
  UpdateSubModule,
  FindAllSubModule,
  FindOneSubModule,
  DeleteSubModule,
];
