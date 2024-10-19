import { AutoMap } from '@automapper/classes';

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
}
