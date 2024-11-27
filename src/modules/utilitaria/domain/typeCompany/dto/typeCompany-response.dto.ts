import { AutoMap } from '@automapper/classes';

/**
 * A class representing a typeCompany response dto.
 */
export class TypeCompanyResponseDto {
  /**
   * TypeCompany id
   */
  @AutoMap()
  id: number;

  /**
   * TypeCompany name
   */
  @AutoMap()
  name: string;

  /**
   * TypeCompany description
   */
  @AutoMap()
  description: string;
}
