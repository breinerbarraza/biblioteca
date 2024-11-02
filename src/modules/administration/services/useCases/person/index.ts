/* istanbul ignore file */
import { CreatePerson } from './createPerson.service';
import { FindAllPerson } from './findAllPerson.service';
import { DeletePerson } from './deletePerson.service';
import { FindOnePerson } from './findOnePerson.service';
import { UpdatePerson } from './updatePerson.service';

/**
 * Array of person use cases.
 */
export const PERSON_USE_CASES = [
  CreatePerson,
  FindAllPerson,
  DeletePerson,
  FindOnePerson,
  UpdatePerson,
];
