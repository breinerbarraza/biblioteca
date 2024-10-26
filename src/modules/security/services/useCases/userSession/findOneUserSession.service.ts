import { UserSessionResponseDto } from '@app/modules/security/domain/userSession/dto/userSession-response.dto';
import { UserSession } from '@app/modules/security/domain/userSession/userSession.entity';
import { UserSessionRepository } from '@app/modules/security/infrastructure/persistence/repositories/userSession/userSession.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a userSession by its ID.
 */
@Injectable()
export class FindOneUserSession {
  /**
   * Constructs a new instance of the FindOneUserSessionService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _userSessionRepository - The repository for accessing userSession data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userSessionRepository: UserSessionRepository,
  ) {}

  /**
   * Retrieves a userSession by its ID.
   *
   * @param id - The ID of the userSession to retrieve.
   * @returns A Promise that resolves to a UserSessionResponseDto object representing the retrieved userSession.
   */
  async handle(id: number): Promise<UserSessionResponseDto> {
    const userSession = await this._userSessionRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(
      userSession,
      UserSession,
      UserSessionResponseDto,
    );

    return response;
  }
}
