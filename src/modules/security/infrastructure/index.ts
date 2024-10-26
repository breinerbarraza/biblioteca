/* istanbul ignore file */
import { UserRepository } from '@app/modules/security/infrastructure/persistence/repositories/user/user.repository';
import { SecurityContext } from './persistence/context/securityContext.service';
import { UserSessionRepository } from './persistence/repositories/userSession/userSession.repository';

/**
 * An array of persistence providers for the security module.
 */
export const SECURITY_PERSISTENCE_PROVIDERS = [
  SecurityContext,
  UserRepository,
  UserSessionRepository,
];
