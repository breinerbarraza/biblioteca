import { UserController } from './controllers/user/user.controller';
import { UserSessionController } from './controllers/userSession/userSession.controller';
/* istanbul ignore file */

/**
 * An array of controllers for the security module.
 */
export const SECURITY_CONTROLLERS = [UserController, UserSessionController];
