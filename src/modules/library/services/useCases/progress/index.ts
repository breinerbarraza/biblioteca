/* istanbul ignore file */
import { CreateProgress } from './createProgress.service';
import { DeleteProgress } from './deleteProgress.service';
import { FindAllProgress } from './findAllProgress.service';
import { FindOneProgress } from './findOneProgress.service';
import { UpdateProgress } from './updateProgress.service';

/**
 * Array of progress use cases.
 */
export const PROGRESS_USE_CASES = [
  CreateProgress,
  FindAllProgress,
  DeleteProgress,
  FindOneProgress,
  UpdateProgress,
];
