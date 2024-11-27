/* istanbul ignore file */
import { PersonRepository } from './persistence/repositories/person/person.repository';
import { AdministrationContext } from './persistence/context/administrationContext.service';
import { CompanyRepository } from './persistence/repositories/company/company.repository';
import { LegalRepresentativeRepository } from './persistence/repositories/legalRepresentative/legalRepresentative.repository';

/**
 * An array of persistence providers for the administration module.
 */
export const ADMINISTRATION_PERSISTENCE_PROVIDERS = [
  AdministrationContext,
  PersonRepository,
  CompanyRepository,
  LegalRepresentativeRepository,
];
