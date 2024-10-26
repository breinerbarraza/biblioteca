import { UserSessionRequestDto } from '@app/modules/security/domain/userSession/dto/userSession-request.dto';
import { UserSessionResponseDto } from '@app/modules/security/domain/userSession/dto/userSession-response.dto';
import { UserSession } from '@app/modules/security/domain/userSession/userSession.entity';
import { UserSessionRepository } from '@app/modules/security/infrastructure/persistence/repositories/userSession/userSession.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new userSession.
 */
@Injectable()
export class CreateUserSession {
  /**
   * Creates an instance of the CreateUserSessionService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userSessionRepository - The repository for managing UserSession entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userSessionRepository: UserSessionRepository,
  ) {}

  /**
   * Handles the creation of a new userSession.
   *
   * @param createUserSessionDto - The data transfer object containing the userSession details.
   * @returns The response containing the created userSession.
   */
  async handle(
    userSessionRequestDto: UserSessionRequestDto,
  ): Promise<UserSessionResponseDto> {
    const userSessionPayload = this._mapper.map(
      userSessionRequestDto,
      UserSessionRequestDto,
      UserSession,
    );

    const userSession =
      await this._userSessionRepository.create(userSessionPayload);

    const response = this._mapper.map(
      userSession,
      UserSession,
      UserSessionResponseDto,
    );

    return response;
  }
}
