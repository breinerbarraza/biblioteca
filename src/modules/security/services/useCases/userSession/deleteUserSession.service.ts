import { UserSessionResponseDto } from '@app/modules/security/domain/userSession/dto/userSession-response.dto';
import { UserSession } from '@app/modules/security/domain/userSession/userSession.entity';
import { UserSessionRepository } from '@app/modules/security/infrastructure/persistence/repositories/userSession/userSession.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a userSession.
 */
@Injectable()
export class DeleteUserSession {
  /**
   * Constructs a new instance of the DeleteUserSessionService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userSessionRepository - The repository for accessing userSession data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userSessionRepository: UserSessionRepository,
  ) {}

  /**
   * Handles the deletion of a userSession item.
   *
   * @param id - The ID of the userSession item to be deleted.
   * @returns A promise that resolves to a UserSessionResponseDto representing the deleted userSession item.
   */
  async handle(id: number): Promise<UserSessionResponseDto> {
    const userSession = await this._userSessionRepository.delete({
      id,
    });

    const response = this._mapper.map(
      userSession,
      UserSession,
      UserSessionResponseDto,
    );

    return response;
  }
}
