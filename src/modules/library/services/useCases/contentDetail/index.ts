/* istanbul ignore file */
import { CreateContentDetail } from './createContentDetail.service';
import { DeleteContentDetail } from './deleteContentDetail.service';
import { FindAllContentDetail } from './findAllContentDetail.service';
import { FindOneContentDetail } from './findOneContentDetail.service';
import { UpdateContentDetail } from './updateContentDetail.service';

/**
 * Array of content use cases.
 */
export const CONTENT_DETAIL_USE_CASES = [
  CreateContentDetail,
  FindAllContentDetail,
  DeleteContentDetail,
  FindOneContentDetail,
  UpdateContentDetail,
];
