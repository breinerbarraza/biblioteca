/* istanbul ignore file */
import { CreateLoginAttempt } from './createLoginAttempt.service';
import { FindAllLoginAttempt } from './findAllLoginAttempt.service';
import { UpdateLoginAttempt } from './updateLoginAttempt.service';
import { DeleteLoginAttempt } from './deleteLoginAttempt.service';
import { FindOneLoginAttempt } from './findOneLoginAttempt.service';

/**
 * Array of loginAttempt use cases.
 */
export const LOGIN_ATTEMPT_USE_CASES = [
  CreateLoginAttempt,
  FindAllLoginAttempt,
  FindOneLoginAttempt,
  UpdateLoginAttempt,
  DeleteLoginAttempt,
];
