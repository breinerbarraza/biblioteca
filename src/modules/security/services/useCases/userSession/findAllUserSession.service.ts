import { UserSessionResponseDto } from '@app/modules/security/domain/userSession/dto/userSession-response.dto';
import { UserSession } from '@app/modules/security/domain/userSession/userSession.entity';
import { UserSessionRepository } from '@app/modules/security/infrastructure/persistence/repositories/userSession/userSession.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all userSessions.
 */
@Injectable()
export class FindAllUserSession {
  /**
   * Constructs a new instance of the `FindAllUserSessionService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _userSessionRepository - The repository for accessing userSession data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userSessionRepository: UserSessionRepository,
  ) {}

  /**
   * Handles the finding of all userSessions.
   * @returns A promise that resolves to an array of UserSessionResponseDto objects.
   */
  async handle(): Promise<UserSessionResponseDto[]> {
    const userSessions = await this._userSessionRepository.getAll();

    const response = this._mapper.mapArray(
      userSessions,
      UserSession,
      UserSessionResponseDto,
    );

    return response;
  }
}
