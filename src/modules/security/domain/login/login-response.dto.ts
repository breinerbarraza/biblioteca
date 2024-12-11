import { UserResponseDto } from '@app/modules/security/domain/user/dto/user-response.dto';
import { AutoMap } from '@automapper/classes';

/**
 * A class representing a login response dto.
 */
export class LoginResponseDto {
  /**
   * Login id
   */
  @AutoMap()
  id?: number;

  /**
   * Login token
   */
  @AutoMap()
  token?: string;

  /**
   * Login message
   */
  @AutoMap()
  message: string;

  /**
   * Login user
   */
  @AutoMap(() => UserResponseDto)
  user?: UserResponseDto;

  /**
   * Login error
   */
  @AutoMap()
  error: boolean;
}
