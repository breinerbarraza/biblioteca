/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { UTILITARIA_PERSISTENCE_PROVIDERS } from './infrastructure';
import { UTILITARIA_CONTROLLERS } from './presentation';
import { UTILITARIA_PROFILES, UTILITARIA_USE_CASES } from './services';

/**
 * A module representing the example module.
 */
@Module({
  controllers: [...UTILITARIA_CONTROLLERS],
  providers: [
    ...UTILITARIA_PERSISTENCE_PROVIDERS,
    ...UTILITARIA_PROFILES,
    ...UTILITARIA_USE_CASES,
  ],
})
export class UtilitariaModule {}
