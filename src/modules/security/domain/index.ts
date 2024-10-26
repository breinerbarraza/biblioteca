/* istanbul ignore file */
import { User } from './user/user.entity';
import { UserSession } from './userSession/userSession.entity';
import { Role } from './role/role.entity';
import { UserRole } from './userRole/userRole.entity';
import { LoginAttempt } from './loginAttempt/loginAttempt.entity';

/**
 * An array of entities for the security module.
 */
export const SECURITY_ENTITIES = [
  User,
  UserSession,
  Role,
  UserRole,
  LoginAttempt,
];
