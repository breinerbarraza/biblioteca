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
}
