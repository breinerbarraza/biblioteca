import { CompanyResponseDto } from '@app/modules/administration/domain/company/dto/company-response.dto';
import { PersonResponseDto } from '@app/modules/administration/domain/person/dto/person-response.dto';
import { AutoMap } from '@automapper/classes';

/**
 * A class representing a identificationType response dto.
 */
export class IdentificationTypeResponseDto {
  /**
   * IdentificationType id
   */
  @AutoMap()
  id: number;

  /**
   * IdentificationType name
   */
  @AutoMap()
  name: string;

  /**
   * IdentificationType acronym
   */
  @AutoMap()
  acronym: string;

  /**
   * IdentificationType code
   */
  @AutoMap()
  code: string;

  // /**
  //  * IdentificationType persons
  //  */
  // @AutoMap(() => PersonResponseDto)
  // persons?: PersonResponseDto;

  // /**
  //  * IdentificationType companies
  //  */
  // @AutoMap(() => CompanyResponseDto)
  // companies: CompanyResponseDto;
}
