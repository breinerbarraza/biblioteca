/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { LIBRARY_CONTROLLERS } from './presentation';
import { LIBRARY_PERSISTENCE_PROVIDERS } from './infrastructure';
import { LIBRARY_PROFILES, LIBRARY_USE_CASES } from './services';

/**
 * A module representing the security module.
 */
@Module({
  controllers: [...LIBRARY_CONTROLLERS],
  providers: [
    ...LIBRARY_PERSISTENCE_PROVIDERS,
    ...LIBRARY_PROFILES,
    ...LIBRARY_USE_CASES,
  ],
})
export class libraryModule {}
