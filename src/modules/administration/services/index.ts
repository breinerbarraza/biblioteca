/* istanbul ignore file */
import { PERSON_USE_CASES } from './useCases/person';
import { PersonProfile } from './profiles/person/person.profile';
import { COMPANY_USE_CASES } from './useCases/company/index';
import { CompanyProfile } from './profiles/company/company.profile';
import { COMPANY_PERSON_USE_CASES } from './useCases/companyPerson';
import { CompanyPersonProfile } from './profiles/companyPerson/companyPerson.profile';

/**
 * An array of use cases for the administration module.
 */
export const ADMINISTRATION_USE_CASES = [
  ...PERSON_USE_CASES,
  ...COMPANY_USE_CASES,
  ...COMPANY_PERSON_USE_CASES,
];

/**
 * An array of profiles for the administration module.
 */
export const ADMINISTRATION_PROFILES = [
  PersonProfile,
  CompanyProfile,
  CompanyPersonProfile,
];
