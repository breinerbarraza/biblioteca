import { AutoMap } from '@automapper/classes';
import { IsNumber } from 'class-validator';

/**
 * A class representing a companyPerson request dto.
 */
export class CompanyPersonRequestDto {
  /**
   * CompanyPerson idCompany
   */
  @IsNumber()
  @AutoMap()
  idCompany: number;

  /**
   * CompanyPerson idPerson
   */
  @IsNumber()
  @AutoMap()
  idPerson: number;
}
