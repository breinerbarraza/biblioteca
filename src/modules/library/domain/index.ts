/* istanbul ignore file */
import { Content } from './content/content.entity';
import { LogAccess } from './logAccess/logAccess.entity';
import { Progress } from './progress/progress.entity';

/**
 * An array of entities for the administration module.
 */
export const LIBRARY_ENTITIES = [
  Content,
  LogAccess,
  Progress
];
