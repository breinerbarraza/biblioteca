import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { CargoResponseDto } from '@app/modules/utilitaria/domain/cargo/dto/cargo-response.dto';
import { IdentificationTypeResponseDto } from '@app/modules/utilitaria/domain/identificationType/dto/identificationType-response.dto';
import { StateResponseDto } from '@app/modules/utilitaria/domain/state/dto/state-response.dto';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

/**
 * A class representing a person response dto.
 */
export class PersonResponseDto {
  /**
   * Person id
   */
  @AutoMap()
  id: number;

  /**
   * Person documentNumber
   */
  @AutoMap()
  documentNumber: string;

  /**
   * Person name
   */
  @AutoMap()
  name: string;

  /**
   * Person middleName
   */
  @AutoMap()
  middleName: string;

  /**
   * Person firstSurname
   */
  @AutoMap()
  firstSurname: string;

  /**
   * Person secondSurname
   */
  @AutoMap()
  secondSurname: string;

  /**
   * Person fullName
   */
  @AutoMap()
  fullName: string;

  /**
   * Person dateBirth
   */
  @AutoMap()
  dateBirth: Date;

  /**
   * Person phone
   */
  @AutoMap()
  phone: string;

  /**
   * Person email
   */
  @AutoMap()
  email: string;

  @ApiProperty({ type: () => StateResponseDto })
  @AutoMap(() => StateResponseDto)
  state: StateResponseDto;

  @ApiProperty({ type: () => IdentificationTypeResponseDto })
  @AutoMap(() => IdentificationTypeResponseDto)
  identificationType: IdentificationTypeResponseDto;

  @ApiProperty({ type: () => CargoResponseDto })
  @AutoMap(() => CargoResponseDto)
  cargo: CargoResponseDto;

  @ApiProperty({ type: () => UserResponseDto })
  @AutoMap(() => UserResponseDto)
  user: UserResponseDto;
}
