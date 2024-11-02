/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { ADMINISTRATION_PERSISTENCE_PROVIDERS } from './infrastructure';
import { ADMINISTRATION_CONTROLLERS } from './presentation';
import { ADMINISTRATION_PROFILES, ADMINISTRATION_USE_CASES } from './services';

/**
 * A module representing the administration module.
 */
@Module({
  controllers: [...ADMINISTRATION_CONTROLLERS],
  providers: [
    ...ADMINISTRATION_PERSISTENCE_PROVIDERS,
    ...ADMINISTRATION_PROFILES,
    ...ADMINISTRATION_USE_CASES,
  ],
})
export class ExampleModule {}
