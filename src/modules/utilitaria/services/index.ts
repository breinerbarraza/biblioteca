/* istanbul ignore file */
import { CARGO_USE_CASES } from './cargo/index';
import { CargoProfile } from './profiles/cargo/cargo.profile';
import { IDENTIFICATION_TYPE_USE_CASES } from './identificationType/index';

/**
 * An array of use cases for the example module.
 */
export const UTILITARIA_USE_CASES = [
  ...CARGO_USE_CASES,
  ...IDENTIFICATION_TYPE_USE_CASES,
];

/**
 * An array of profiles for the example module.
 */
export const UTILITARIA_PROFILES = [CargoProfile];
