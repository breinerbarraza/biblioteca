import { LogAccessResponseDto } from '@app/modules/library/domain/logAccess/dto/logAccess-response.dto';
import { LogAccessUpdateDto } from '@app/modules/library/domain/logAccess/dto/logAccess-update.dto';
import { LogAccess } from '@app/modules/library/domain/logAccess/logAccess.entity';
import { LogAccessRepository } from '@app/modules/library/infrastructure/persistence/repositories/logAccess/logAccess.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneLogAccess } from './findOneLogAccess.service';

/**
 * Service class for updating a logAccess.
 */
@Injectable()
export class UpdateLogAccess {
  /**
   * Constructs a new instance of the UpdateLogAccessService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _logAccessRepository - The repository for accessing logAccess data.
   * @param _findOneLogAccess - The use case for finding a single logAccess.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _logAccessRepository: LogAccessRepository,
    private readonly _findOneLogAccess: FindOneLogAccess,
  ) {}

  /**
   * Handles the update of a logAccess item.
   *
   * @param id - The ID of the logAccess item to update.
   * @param logAccessUpdateDto - The data to update the logAccess item with.
   * @returns The updated logAccess item.
   * @throws NotFoundException if the logAccess item with the specified ID is not found.
   */
  async handle(
    id: number,
    logAccessUpdateDto: LogAccessUpdateDto,
  ): Promise<LogAccessResponseDto> {
    const exist = await this._findOneLogAccess.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`LogAccess with id ${id} not found`);
    }

    const logAccessUpdatePayload = this._mapper.map(
      logAccessUpdateDto,
      LogAccessUpdateDto,
      LogAccess,
    );

    const logAccess = await this._logAccessRepository.update(id, logAccessUpdatePayload);

    const response = this._mapper.map(logAccess, LogAccess, LogAccessResponseDto);

    return response;
  }
}
