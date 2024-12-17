import { LogAccess } from '@app/modules/library/domain/logAccess/logAccess.entity';
import { LogAccessResponseDto } from '@app/modules/library/domain/logAccess/dto/logAccess-response.dto';
import { LogAccessRepository } from '@app/modules/library/infrastructure/persistence/repositories/logAccess/logAccess.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a logAccess by its ID.
 */
@Injectable()
export class FindOneLogAccess {
  /**
   * Constructs a new instance of the FindOneLogAccessService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _logAccessRepository - The repository for accessing logAccess data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _logAccessRepository: LogAccessRepository,
  ) {}

  /**
   * Retrieves a logAccess by its ID.
   *
   * @param id - The ID of the logAccess to retrieve.
   * @returns A Promise that resolves to a LogAccessResponseDto object representing the retrieved logAccess.
   */
  async handle(id: number): Promise<LogAccessResponseDto> {
    const logAccess = await this._logAccessRepository.findBy({
      where: { id },
      relations: { user: true, content: true }
    });

    const response = this._mapper.map(logAccess, LogAccess, LogAccessResponseDto);

    return response;
  }
}
