/* istanbul ignore file */
import { IdentificationTypeController } from './controllers/identificationType/identificationType.controller';
import { CargoController } from './controllers/cargo/cargo.controller';
import { StateController } from './controllers/state/state.controller';

/**
 * An array of controllers for the example module.
 */
export const UTILITARIA_CONTROLLERS = [
  CargoController,
  IdentificationTypeController,
  StateController,
];
