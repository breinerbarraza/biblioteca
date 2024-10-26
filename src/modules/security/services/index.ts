/* istanbul ignore file */
import { RoleProfile } from './profiles/role/role.profile';
import { UserProfile } from './profiles/user/user.profile';
import { UserSessionProfile } from './profiles/userSession/userSession.profile';
import { UserRoleProfile } from './profiles/userRole/userRole.profile';
import { LoginAttemptProfile } from './profiles/loginAttempt/loginAttempt.profile';
import { USER_USE_CASES } from '../services/useCases/user';
import { USER_SESSION_USE_CASES } from '../services/useCases/userSession';
import { ROLE_USE_CASES } from '../services/useCases/role';
import { USER_ROLE_USE_CASES } from '../services/useCases/userRole';
import { LOGIN_ATTEMPT_USE_CASES } from './useCases/loginAttempt/index';

/**
 * An array of use cases for the security module.
 */
export const SECURITY_USE_CASES = [
  ...USER_USE_CASES,
  ...USER_SESSION_USE_CASES,
  ...ROLE_USE_CASES,
  ...USER_ROLE_USE_CASES,
  ...LOGIN_ATTEMPT_USE_CASES,
];

/**
 * An array of profiles for the security module.
 */
export const SECURITY_PROFILES = [
  UserProfile,
  UserSessionProfile,
  RoleProfile,
  UserRoleProfile,
  LoginAttemptProfile,
];
