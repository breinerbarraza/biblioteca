/* istanbul ignore file */
import { UtilitariaContext } from './persistence/context/utilitariaContext.service';
import { IdentificationTypeRepository } from './persistence/repositories/identificationType/identificationType.repository';
import { CargoRepository } from './persistence/repositories/cargo/cargo.repository';
import { StateRepository } from './persistence/repositories/state/state.repository';

/**
 * An array of persistence providers for the example module.
 */
export const UTILITARIA_PERSISTENCE_PROVIDERS = [
  UtilitariaContext,
  CargoRepository,
  IdentificationTypeRepository,
  StateRepository,
];
