/* istanbul ignore file */
import { Global, Module } from '@nestjs/common';
import { ADMINISTRATION_PERSISTENCE_PROVIDERS } from './infrastructure';
import { ADMINISTRATION_CONTROLLERS } from './presentation';
import { ADMINISTRATION_PROFILES, ADMINISTRATION_USE_CASES } from './services';
import { PersonRepository } from './infrastructure/persistence/repositories/person/person.repository';
import { CompanyPersonRepository } from './infrastructure/persistence/repositories/companyPerson/companyPerson.repository';

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
  exports: [PersonRepository, CompanyPersonRepository],
})
@Global()
export class ExampleModule {}
