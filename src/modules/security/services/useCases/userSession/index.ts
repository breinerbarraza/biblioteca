/* istanbul ignore file */
import { CreateUserSession } from './createUserSession.service';
import { FindAllUserSession } from './findAllUserSession.service';
import { UpdateUserSession } from './updateUserSession.service';
import { DeleteUserSession } from './deleteUserSession.service';
import { FindOneUserSession } from './findOneUserSession.service';

/**
 * Array of userSession use cases.
 */
export const USER_SESSION_USE_CASES = [
  CreateUserSession,
  FindAllUserSession,
  FindOneUserSession,
  UpdateUserSession,
  DeleteUserSession,
];
