/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { SECURITY_PERSISTENCE_PROVIDERS } from './infrastructure';
import { SECURITY_CONTROLLERS } from './presentation';
import { SECURITY_PROFILES, SECURITY_USE_CASES } from './services';

/**
 * A module representing the security module.
 */
@Module({
  controllers: [...SECURITY_CONTROLLERS],
  providers: [
    ...SECURITY_PERSISTENCE_PROVIDERS,
    ...SECURITY_PROFILES,
    ...SECURITY_USE_CASES,
  ],
})
export class SecurityModule {}
