/* istanbul ignore file */

import { TypeCompany } from '@app/modules/utilitaria/domain/typeCompany/typeCompany.entity';
import { Cargo } from './cargo/cargo.entity';
import { IdentificationType } from './identificationType/identificationType.entity';
import { State } from './state/state.entity';
import { Genders } from './genders/genders.entity';
import { Cities } from './cities/cities.entity';

/**
 * An array of entities for the example module.
 */
export const UTILITARIA_ENTITIES = [
  IdentificationType,
  Cargo,
  State,
  TypeCompany,
  Genders,
  Cities,
];
