/* istanbul ignore file */
import { PERSON_USE_CASES } from './useCases/person';
import { PersonProfile } from './profiles/person/person.profile';
import { COMPANY_USE_CASES } from './useCases/company/index';
import { CompanyProfile } from './profiles/company/company.profile';
import { LegalRepresentativeProfile } from './profiles/legalRepresentative/legalRepresentative.profile';
import { LEGALREPRESENTATIVE_USE_CASES } from './useCases/legalRepresentative';
import { COMPANY_PERSON_USE_CASES } from './useCases/companyPerson';
import { CompanyPersonProfile } from './profiles/companyPerson/companyPerson.profile';
import { MENU_USE_CASES } from './useCases/menu';
import { SUBMODULOS_USE_CASES } from './useCases/subModule';
import { MODULOS_USE_CASES } from './useCases/modulos';
import { SubModuleProfile } from './profiles/subModule/subModule.profile';
import { ModuloProfile } from './profiles/modulos/modulos.profile';
import { MenuProfile } from './profiles/menu/menu.profile';

/**
 * An array of use cases for the administration module.
 */
export const ADMINISTRATION_USE_CASES = [
  ...PERSON_USE_CASES,
  ...COMPANY_USE_CASES,
  ...LEGALREPRESENTATIVE_USE_CASES,
  ...COMPANY_PERSON_USE_CASES,
  ...MENU_USE_CASES,
  ...SUBMODULOS_USE_CASES,
  ...MODULOS_USE_CASES,
];

/**
 * An array of profiles for the administration module.
 */
export const ADMINISTRATION_PROFILES = [
  PersonProfile,
  CompanyProfile,
  LegalRepresentativeProfile,
  CompanyPersonProfile,
  SubModuleProfile,
  ModuloProfile,
  MenuProfile,
];
