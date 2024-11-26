/* istanbul ignore file */
import { CargoProfile } from './profiles/cargo/cargo.profile';
import { IdentificationTypeProfile } from './profiles/identificationType/identificationType.profile';
import { StateProfile } from './profiles/state/state.profile';
import { CARGO_USE_CASES } from './useCases/cargo';
import { IDENTIFICATION_TYPE_USE_CASES } from './useCases/identificationType';
import { STATE_USE_CASES } from './useCases/state/index';

/**
 * An array of use cases for the example module.
 */
export const UTILITARIA_USE_CASES = [
  ...CARGO_USE_CASES,
  ...IDENTIFICATION_TYPE_USE_CASES,
  ...STATE_USE_CASES,
];

/**
 * An array of profiles for the example module.
 */
export const UTILITARIA_PROFILES = [
  CargoProfile,
  StateProfile,
  IdentificationTypeProfile,
];
