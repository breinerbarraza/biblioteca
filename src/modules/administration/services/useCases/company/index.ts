/* istanbul ignore file */
import { CreateCompany } from './createCompany.service';
import { FindAllCompany } from './findAllCompany.service';
import { DeleteCompany } from './deleteCompany.service';
import { FindOneCompany } from './findOneCompany.service';
import { UpdateCompany } from './updateCompany.service';

/**
 * Array of company use cases.
 */
export const COMPANY_USE_CASES = [
  CreateCompany,
  FindAllCompany,
  DeleteCompany,
  FindOneCompany,
  UpdateCompany,
];
