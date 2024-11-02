/* istanbul ignore file */
import { PersonRepository } from './persistence/repositories/person/person.repository';
import { AdministrationContext } from './persistence/context/administrationContext.service';

/**
 * An array of persistence providers for the administration module.
 */
export const ADMINISTRATION_PERSISTENCE_PROVIDERS = [
  AdministrationContext,
  PersonRepository,
];
