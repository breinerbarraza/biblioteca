/* istanbul ignore file */
import { UserRepository } from '@app/modules/security/infrastructure/persistence/repositories/user/user.repository';
import { SecurityContext } from './persistence/context/securityContext.service';
import { RoleRepository } from './persistence/repositories/role/role.repository';
import { UserRoleRepository } from './persistence/repositories/userRole/userRole.repository';
import { UserSessionRepository } from './persistence/repositories/userSession/userSession.repository';
import { LoginAttemptRepository } from './persistence/repositories/loginAttempt/loginAttempt.repository';

/**
 * An array of persistence providers for the security module.
 */
export const SECURITY_PERSISTENCE_PROVIDERS = [
  SecurityContext,
  UserRepository,
  UserSessionRepository,
  RoleRepository,
  UserRoleRepository,
  LoginAttemptRepository,
];
