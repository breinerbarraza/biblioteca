/* istanbul ignore file */
import { CreateRole } from './createRole.service';
import { FindAllRole } from './findAllRole.service';
import { UpdateRole } from './updateRole.service';
import { DeleteRole } from './deleteRole.service';
import { FindOneRole } from './findOneRole.service';

/**
 * Array of role use cases.
 */
export const ROLE_USE_CASES = [
  CreateRole,
  FindAllRole,
  FindOneRole,
  UpdateRole,
  DeleteRole,
];
