/* istanbul ignore file */

import { CreateMenu } from './createMenu.service';
import { DeleteMenu } from './deleteMenu.service';
import { FindAllMenu } from './findAllMenu.service';
import { FindOneMenu } from './findOneMenu.service';
import { UpdateMenu } from './updateMenu.service';

/**
 * Array of Menu use cases.
 */
export const MENU_USE_CASES = [
  CreateMenu,
  UpdateMenu,
  FindAllMenu,
  FindOneMenu,
  DeleteMenu,
];
