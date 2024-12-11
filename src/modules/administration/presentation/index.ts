/* istanbul ignore file */
import { PersonController } from './controllers/person/person.controller';
import { CompanyController } from './controllers/company/company.controller';
import { LegalRepresentativeController } from './controllers/legalRepresentative/legalRepresentative.controller';
import { CompanyPersonController } from './controllers/companyPerson/companyPerson.controller';
import { MenuController } from './controllers/menu/menu.controller';
import { ModuloController } from './controllers/modulos/modulos.controller';
import { SubModuleController } from './controllers/subModule/subModule.controller';

/**
 * An array of controllers for the administration module.
 */
export const ADMINISTRATION_CONTROLLERS = [
  PersonController,
  CompanyController,
  LegalRepresentativeController,
  CompanyPersonController,
  MenuController,
  ModuloController,
  SubModuleController,
];
