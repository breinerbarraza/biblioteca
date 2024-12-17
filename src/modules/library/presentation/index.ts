/* istanbul ignore file */
import { ContentController } from './controllers/content/content.controller';
import { LogAccessController } from './controllers/logAccess/logAccess.controller';
import { ProgressController } from './controllers/progress/progress.controller';

/**
 * An array of controllers for the library module.
 */
export const LIBRARY_CONTROLLERS = [
    ContentController,
    LogAccessController,
    ProgressController
];
