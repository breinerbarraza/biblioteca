import { LogAccessResponseDto } from '@app/modules/library/domain/logAccess/dto/logAccess-response.dto';
import { LogAccess } from '@app/modules/library/domain/logAccess/logAccess.entity';
import { LogAccessRepository } from '@app/modules/library/infrastructure/persistence/repositories/logAccess/logAccess.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a logAccess.
 */
@Injectable()
export class DeleteLogAccess {
  /**
   * Constructs a new instance of the DeleteLogAccessService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _logAccessRepository - The repository for accessing logAccess data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _logAccessRepository: LogAccessRepository,
  ) { }

  /**
   * Handles the deletion of a logAccess item.
   *
   * @param id - The ID of the logAccess item to be deleted.
   * @returns A promise that resolves to a LogAccessResponseDto representing the deleted logAccess item.
   */
  async handle(id: number): Promise<LogAccessResponseDto> {
    const logAccess = await this._logAccessRepository.delete({
      id,
    });

    const response = this._mapper.map(logAccess, LogAccess, LogAccessResponseDto);

    return response;
  }
}
