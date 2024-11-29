/* istanbul ignore file */
import { LoginUser } from './loginUser.service';
import { RefreshToken } from './refreshToken.service';

/**
 * Array of loginAttempt use cases.
 */
export const LOGIN_USE_CASES = [LoginUser, RefreshToken];
