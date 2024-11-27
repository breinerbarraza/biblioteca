/* istanbul ignore file */
import { Person } from './person/person.entity';
import { Company } from './company/company.entity';
import { LegalRepresentative } from './legalReprensentative/legalRepresentative.entity';
import { CompanyPerson } from './companyPerson/companyPerson.entity';

/**
 * An array of entities for the administration module.
 */
export const ADMINISTRATION_ENTITIES = [
  Person,
  Company,
  CompanyPerson,
  LegalRepresentative,
];
