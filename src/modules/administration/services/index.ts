/* istanbul ignore file */
import { PERSON_USE_CASES } from './useCases/person';
import { PersonProfile } from './profiles/person/person.profile';
import { COMPANY_USE_CASES } from './useCases/company/index';
import { CompanyProfile } from './profiles/company/company.profile';
import { LegalRepresentativeProfile } from './profiles/legalRepresentative/legalRepresentative.profile';
import { LEGALREPRESENTATIVE_USE_CASES } from './useCases/legalRepresentative';

/**
 * An array of use cases for the administration module.
 */
export const ADMINISTRATION_USE_CASES = [
  ...PERSON_USE_CASES,
  ...COMPANY_USE_CASES,
  ...LEGALREPRESENTATIVE_USE_CASES,
];

/**
 * An array of profiles for the administration module.
 */
export const ADMINISTRATION_PROFILES = [
  PersonProfile,
  CompanyProfile,
  LegalRepresentativeProfile,
];
