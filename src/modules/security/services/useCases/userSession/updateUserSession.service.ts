import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserSessionResponseDto } from '@app/modules/security/domain/userSession/dto/userSession-response.dto';
import { UserSession } from '@app/modules/security/domain/userSession/userSession.entity';
import { UserSessionRepository } from '@app/modules/security/infrastructure/persistence/repositories/userSession/userSession.repository';
import { UserSessionUpdateDto } from '@app/modules/security/domain/userSession/dto/userSession-update.dto';
import { FindOneUserSession } from '@app/modules/security/services/useCases/userSession/findOneUserSession.service';

/**
 * Service class for updating a userSession.
 */
@Injectable()
export class UpdateUserSession {
  /**
   * Constructs a new instance of the UpdateUserSessionService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userSessionRepository - The repository for accessing userSession data.
   * @param _findOneUserSession - The use case for finding a single userSession.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userSessionRepository: UserSessionRepository,
    private readonly _findOneUserSession: FindOneUserSession,
  ) {}

  /**
   * Handles the update of a userSession item.
   *
   * @param id - The ID of the userSession item to update.
   * @param userSessionUpdateDto - The data to update the userSession item with.
   * @returns The updated userSession item.
   * @throws NotFoundException if the userSession item with the specified ID is not found.
   */
  async handle(
    id: number,
    userSessionUpdateDto: UserSessionUpdateDto,
  ): Promise<UserSessionResponseDto> {
    const exist = await this._findOneUserSession.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`UserSession with id ${id} not found`);
    }

    const userSessionUpdatePayload = this._mapper.map(
      userSessionUpdateDto,
      UserSessionUpdateDto,
      UserSession,
    );

    const userSession = await this._userSessionRepository.update(
      id,
      userSessionUpdatePayload,
    );

    const response = this._mapper.map(
      userSession,
      UserSession,
      UserSessionResponseDto,
    );

    return response;
  }
}
