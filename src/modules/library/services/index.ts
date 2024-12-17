/* istanbul ignore file */
import { ContentProfile } from './profiles/content/content.profile';
import { LogAccessProfile } from './profiles/logAccess/logAccess.profile';
import { ProgressProfile } from './profiles/progress/progress.profile';
import { CONTENT_USE_CASES } from './useCases/content';
import { LOGACCESS_USE_CASES } from './useCases/logAccess';
import { PROGRESS_USE_CASES } from './useCases/progress';

/**
 * An array of use cases for the administration module.
 */
export const LIBRARY_USE_CASES = [
  ...CONTENT_USE_CASES,
  ...LOGACCESS_USE_CASES,
  ...PROGRESS_USE_CASES
];

/**
 * An array of profiles for the administration module.
 */
export const LIBRARY_PROFILES = [
  ContentProfile,
  LogAccessProfile,
  ProgressProfile
];
