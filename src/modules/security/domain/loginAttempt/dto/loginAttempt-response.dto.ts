import { AutoMap } from '@automapper/classes';

/**
 * A class representing a loginAttempt response dto.
 */
export class LoginAttemptResponseDto {
  /**
   * LoginAttempt id
   */
  @AutoMap()
  id: number;

  /**
   * LoginAttempt idUser
   */
  @AutoMap()
  idUser: number;

  /**
   * LoginAttempt attemptsAt
   */
  @AutoMap()
  attemptsAt: string;

  /**
   * LoginAttempt successful
   */
  @AutoMap()
  successful: boolean;

  /**
   * LoginAttempt ipAddress
   */
  @AutoMap()
  ipAddress: string;

  /**
   * LoginAttempt pcName
   */
  @AutoMap()
  pcName: string;
}
