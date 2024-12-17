import { LogAccessRequestDto } from '@app/modules/library/domain/logAccess/dto/logAccess-request.dto';
import { LogAccessResponseDto } from '@app/modules/library/domain/logAccess/dto/logAccess-response.dto';
import { LogAccess } from '@app/modules/library/domain/logAccess/logAccess.entity';
import { LogAccessRepository } from '@app/modules/library/infrastructure/persistence/repositories/logAccess/logAccess.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new logAccess.
 */
@Injectable()
export class CreateLogAccess {
  /**
   * Creates an instance of the CreateLogAccessService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _logAccessRepository - The repository for managing LogAccess entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _logAccessRepository: LogAccessRepository,
  ) {}

  /**
   * Handles the creation of a new logAccess.
   *
   * @param createLogAccessDto - The data transfer object containing the logAccess details.
   * @returns The response containing the created logAccess.
   */
  async handle(logAccessRequestDto: LogAccessRequestDto): Promise<LogAccessResponseDto> {
    const logAccessPayload = this._mapper.map(
      logAccessRequestDto,
      LogAccessRequestDto,
      LogAccess,
    );

    const logAccess = await this._logAccessRepository.create(logAccessPayload);

    const response = this._mapper.map(logAccess, LogAccess, LogAccessResponseDto);

    return response;
  }
}
