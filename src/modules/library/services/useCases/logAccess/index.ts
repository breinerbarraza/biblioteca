/* istanbul ignore file */
import { CreateLogAccess } from './createLogAccess.service';
import { DeleteLogAccess } from './deleteLogAccess.service';
import { FindAllLogAccess } from './findAllLogAccess.service';
import { FindOneLogAccess } from './findOneLogAccess.service';
import { UpdateLogAccess } from './updateLogAccess.service';

/**
 * Array of logAccess use cases.
 */
export const LOGACCESS_USE_CASES = [
  CreateLogAccess,
  FindAllLogAccess,
  DeleteLogAccess,
  FindOneLogAccess,
  UpdateLogAccess,
];
