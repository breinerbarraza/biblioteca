/* istanbul ignore file */
import { LibraryContext } from './persistence/context/libraryContext.service';
import { ContentRepository } from './persistence/repositories/content/content.repository';
import { LogAccessRepository } from './persistence/repositories/logAccess/logAccess.repository';
import { ProgressRepository } from './persistence/repositories/progress/progress.repository';

/**
 * An array of persistence providers for the library module.
 */
export const LIBRARY_PERSISTENCE_PROVIDERS = [
    LibraryContext,
    ContentRepository,
    LogAccessRepository,
    ProgressRepository
];
