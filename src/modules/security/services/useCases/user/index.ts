/* istanbul ignore file */
import { CreateUser } from './createUser.service';
import { FindAllUser } from './findAllUser.service';
import { UpdateUser } from './updateUser.service';
import { DeleteUser } from './deleteUser.service';
import { FindOneUser } from './findOneUser.service';

/**
 * Array of user use cases.
 */
export const USER_USE_CASES = [
  CreateUser,
  FindAllUser,
  FindOneUser,
  UpdateUser,
  DeleteUser,
];
