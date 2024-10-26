/* istanbul ignore file */
import { User } from './user/user.entity';
import { UserSession } from './userSession/userSession.entity';

/**
 * An array of entities for the security module.
 */
export const SECURITY_ENTITIES = [User, UserSession];
