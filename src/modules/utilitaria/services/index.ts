/* istanbul ignore file */
import { CargoProfile } from './profiles/cargo/cargo.profile';
import { IdentificationTypeProfile } from './profiles/identificationType/identificationType.profile';
import { StateProfile } from './profiles/state/state.profile';
import { CARGO_USE_CASES } from './useCases/cargo';
import { IDENTIFICATION_TYPE_USE_CASES } from './useCases/identificationType';
import { STATE_USE_CASES } from './useCases/state/index';
import { TypeCompanyProfile } from './profiles/typeCompany/typeCompany.profile';
import { TYPE_COMPANY_USE_CASES } from './useCases/typeCompany/index';
import { CitiesProfile } from './profiles/cities/cities.profile';
import { GendersProfile } from './profiles/genders/genders.profile';
import { GENDERS_USE_CASES } from './useCases/genders';
import { CITIES_USE_CASES } from './useCases/cities';

/**
 * An array of use cases for the example module.
 */
export const UTILITARIA_USE_CASES = [
  ...CARGO_USE_CASES,
  ...IDENTIFICATION_TYPE_USE_CASES,
  ...STATE_USE_CASES,
  ...TYPE_COMPANY_USE_CASES,
  ...GENDERS_USE_CASES,
  ...CITIES_USE_CASES,
];

/**
 * An array of profiles for the example module.
 */
export const UTILITARIA_PROFILES = [
  CargoProfile,
  StateProfile,
  IdentificationTypeProfile,
  TypeCompanyProfile,
  CitiesProfile,
  GendersProfile,
];
