import { PersonResponseDto } from '@app/modules/administration/domain/person/dto/person-response.dto';
import { AutoMap } from '@automapper/classes';
import { UserRoleResponseDto } from '../../userRole/dto/userRole-response.dto';

/**
 * A class representing a user response dto.
 */
export class UserResponseDto {
  /**
   * User id
   */
  @AutoMap()
  id: number;

  /**
   * User userName
   */
  @AutoMap()
  userName: string;

  /**
   * User email
   */
  @AutoMap()
  email: string;

  /**
   * User password
   */
  @AutoMap()
  password: string;

  /**
   * User state
   */
  @AutoMap()
  state: boolean;

  /**
   * User failedAttempts
   */
  @AutoMap()
  failedAttempts: number;

  /**
   * User persons
   */
  @AutoMap()
  persons?: PersonResponseDto;

  /**
   * User userRole
   */
  @AutoMap()
  userRole?: UserRoleResponseDto[];
}
