/* istanbul ignore file */
import { CreateUserRole } from './createUserRole.service';
import { FindAllUserRole } from './findAllUserRole.service';
import { UpdateUserRole } from './updateUserRole.service';
import { DeleteUserRole } from './deleteUserRole.service';
import { FindOneUserRole } from './findOneUserRole.service';

/**
 * Array of userRole use cases.
 */
export const USER_ROLE_USE_CASES = [
  CreateUserRole,
  FindAllUserRole,
  FindOneUserRole,
  UpdateUserRole,
  DeleteUserRole,
];
