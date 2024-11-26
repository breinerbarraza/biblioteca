/* istanbul ignore file */
import { CreateCompanyPerson } from './createCompanyPerson.service';
import { FindAllCompanyPerson } from './findAllCompanyPerson.service';
import { DeleteCompanyPerson } from './deleteCompanyPerson.service';
import { FindOneCompanyPerson } from './findOneCompanyPerson.service';
import { UpdateCompanyPerson } from './updateCompanyPerson.service';

/**
 * Array of companyPerson use cases.
 */
export const COMPANY_PERSON_USE_CASES = [
  CreateCompanyPerson,
  FindAllCompanyPerson,
  DeleteCompanyPerson,
  FindOneCompanyPerson,
  UpdateCompanyPerson,
];
