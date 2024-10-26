import { AutoMap } from '@automapper/classes';

/**
 * A class representing a user response dto.
 */
export class UserSessionResponseDto {
  /**
   * User id
   */
  @AutoMap()
  id: number;

  /**
   * UserSession idUserSession
   */
  @AutoMap()
  idUserSession: number;

  /**
   * UserSession sessionStart
   */
  @AutoMap()
  sessionStart: Date;

  /**
   * UserSession sessionEnd
   */
  @AutoMap()
  sessionEnd: Date;

  /**
   * UserSession pcName
   */
  @AutoMap()
  pcName: string;

  /**
   * UserSession ipAddress
   */
  @AutoMap()
  ipAddress: string;

  /**
   * UserSession duration
   */
  @AutoMap()
  duration: number;
}
