import { AutoMap } from '@automapper/classes';

/**
 * A class representing a companyPerson response dto.
 */
export class CompanyPersonResponseDto {
  /**
   * CompanyPerson id
   */
  @AutoMap()
  id: number;

  /**
   * CompanyPerson idCompany
   */
  @AutoMap()
  idCompany: number;

  /**
   * CompanyPerson idPerson
   */
  @AutoMap()
  idPerson: number;
}
