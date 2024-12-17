/* istanbul ignore file */
import { CreateContent } from './createContent.service';
import { DeleteContent } from './deleteContent.service';
import { FindAllContent } from './findAllContent.service';
import { FindOneContent } from './findOneContent.service';
import { UpdateContent } from './updateContent.service';

/**
 * Array of content use cases.
 */
export const CONTENT_USE_CASES = [
  CreateContent,
  FindAllContent,
  DeleteContent,
  FindOneContent,
  UpdateContent,
];
