import { CreateLegalRepresentative } from './createLegalRepresentative.service';
import { DeleteLegalRepresentative } from './deleteLegalRepresentatice.service';
import { FindAllLegalRepresentative } from './findAllLegalRepresentative.service';
import { FindOneLegalRepresentative } from './findOneLegalRepresentative.service';
import { UpdateLegalRepresentative } from './updateLegalRepresentative.service';

/**
 * Array of legalRepresentative use cases.
 */
export const LEGALREPRESENTATIVE_USE_CASES = [
  CreateLegalRepresentative,
  DeleteLegalRepresentative,
  FindAllLegalRepresentative,
  FindOneLegalRepresentative,
  UpdateLegalRepresentative,
];
