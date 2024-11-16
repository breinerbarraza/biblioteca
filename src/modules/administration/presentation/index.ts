/* istanbul ignore file */
import { PersonController } from './controllers/person/person.controller';
import { CompanyController } from './controllers/company/company.controller';

/**
 * An array of controllers for the administration module.
 */
export const ADMINISTRATION_CONTROLLERS = [PersonController, CompanyController];
