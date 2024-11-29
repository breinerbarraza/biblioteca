/* istanbul ignore file */
import { EmailCreatePassword } from './emailCreatePassword.service';
import { EmailMassiveCreatePassword } from './emailMassiveCreatePassword.service';
import { EmailRecoveryPassword } from './emailRecoveryPassword.service';
import { RecoveryPassword } from './recoveryPassword.service';

/**
 * Array of todo use cases.
 */
export const RECOVERY_PASSWORD_USE_CASES = [
  EmailRecoveryPassword,
  RecoveryPassword,
  EmailMassiveCreatePassword,
  EmailCreatePassword,
];
