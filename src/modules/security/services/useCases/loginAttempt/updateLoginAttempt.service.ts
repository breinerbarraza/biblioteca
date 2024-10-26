import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginAttemptResponseDto } from '@app/modules/security/domain/loginAttempt/dto/loginAttempt-response.dto';
import { LoginAttempt } from '@app/modules/security/domain/loginAttempt/loginAttempt.entity';
import { LoginAttemptRepository } from '@app/modules/security/infrastructure/persistence/repositories/loginAttempt/loginAttempt.repository';
import { LoginAttemptUpdateDto } from '@app/modules/security/domain/loginAttempt/dto/loginAttempt-update.dto';
import { FindOneLoginAttempt } from '@app/modules/security/services/useCases/loginAttempt/findOneLoginAttempt.service';

/**
 * Service class for updating a loginAttempt.
 */
@Injectable()
export class UpdateLoginAttempt {
  /**
   * Constructs a new instance of the UpdateLoginAttemptService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _loginAttemptRepository - The repository for accessing loginAttempt data.
   * @param _findOneLoginAttempt - The use case for finding a single loginAttempt.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _loginAttemptRepository: LoginAttemptRepository,
    private readonly _findOneLoginAttempt: FindOneLoginAttempt,
  ) {}

  /**
   * Handles the update of a loginAttempt item.
   *
   * @param id - The ID of the loginAttempt item to update.
   * @param loginAttemptUpdateDto - The data to update the loginAttempt item with.
   * @returns The updated loginAttempt item.
   * @throws NotFoundException if the loginAttempt item with the specified ID is not found.
   */
  async handle(
    id: number,
    loginAttemptUpdateDto: LoginAttemptUpdateDto,
  ): Promise<LoginAttemptResponseDto> {
    const exist = await this._findOneLoginAttempt.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`LoginAttempt with id ${id} not found`);
    }

    const loginAttemptUpdatePayload = this._mapper.map(
      loginAttemptUpdateDto,
      LoginAttemptUpdateDto,
      LoginAttempt,
    );

    const loginAttempt = await this._loginAttemptRepository.update(
      id,
      loginAttemptUpdatePayload,
    );

    const response = this._mapper.map(
      loginAttempt,
      LoginAttempt,
      LoginAttemptResponseDto,
    );

    return response;
  }
}
