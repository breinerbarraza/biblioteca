/* istanbul ignore file */
import { USER_USE_CASES } from './user/index';
import { UserProfile } from './profiles/user/user.profile';

/**
 * An array of use cases for the security module.
 */
export const SECURITY_USE_CASES = [...USER_USE_CASES];

/**
 * An array of profiles for the security module.
 */
export const SECURITY_PROFILES = [UserProfile];
