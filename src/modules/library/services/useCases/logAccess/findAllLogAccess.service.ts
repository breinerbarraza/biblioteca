import { LogAccessResponseDto } from '@app/modules/library/domain/logAccess/dto/logAccess-response.dto';
import { LogAccess } from '@app/modules/library/domain/logAccess/logAccess.entity';
import { LogAccessRepository } from '@app/modules/library/infrastructure/persistence/repositories/logAccess/logAccess.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all logAccess.
 */
@Injectable()
export class FindAllLogAccess {
  /**
   * Constructs a new instance of the `FindAllLogAccessService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _contentRepository - The repository for accessing content data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _contentRepository: LogAccessRepository,
  ) {}

  /**
   * Handles the finding of all logAccess.
   * @returns A promise that resolves to an array of LogAccessResponseDto objects.
   */
  async handle(): Promise<LogAccessResponseDto[]> {
    const logAccess = await this._contentRepository.getAll({
      relations: { user: true, content: true }
    });

    const response = this._mapper.mapArray(logAccess, LogAccess, LogAccessResponseDto);

    return response;
  }
}
