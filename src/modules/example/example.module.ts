/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { EXAMPLE_PERSISTENCE_PROVIDERS } from './infrastructure';
import { EXAMPLE_CONTROLLERS } from './presentation';
import { EXAMPLE_PROFILES, EXAMPLE_USE_CASES } from './services';

/**
 * A module representing the example module.
 */
@Module({
  controllers: [...EXAMPLE_CONTROLLERS],
  providers: [
    ...EXAMPLE_PERSISTENCE_PROVIDERS,
    ...EXAMPLE_PROFILES,
    ...EXAMPLE_USE_CASES,
  ],
})
export class AdministrationModule {}
