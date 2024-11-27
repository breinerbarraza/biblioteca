import { AutoMap } from '@automapper/classes';
import { IsNumber, IsOptional } from 'class-validator';

/**
 * A class representing a todo update dto.
 */
export class CompanyPersonUpdateDto {
  /**
   * Company id
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  id: number;

  /**
   * Company idCompany
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  idCompany: number;

  /**
   * Company idPerson
   */
  @IsNumber()
  @IsOptional()
  @AutoMap()
  idPerson: number;
}
