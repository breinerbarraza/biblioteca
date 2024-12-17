import { Progress } from '@app/modules/library/domain/progress/progress.entity';
import { ProgressResponseDto } from '@app/modules/library/domain/progress/dto/progress-response.dto';
import { ProgressRepository } from '@app/modules/library/infrastructure/persistence/repositories/progress/progress.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a progress by its ID.
 */
@Injectable()
export class FindOneProgress {
  /**
   * Constructs a new instance of the FindOneProgressService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _progressRepository - The repository for accessing progress data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _progressRepository: ProgressRepository,
  ) {}

  /**
   * Retrieves a progress by its ID.
   *
   * @param id - The ID of the progress to retrieve.
   * @returns A Promise that resolves to a ProgressResponseDto object representing the retrieved progress.
   */
  async handle(id: number): Promise<ProgressResponseDto> {
    const progress = await this._progressRepository.findBy({
      where: { id },
      relations: { user: true, content: true }
    });

    const response = this._mapper.map(progress, Progress, ProgressResponseDto);

    return response;
  }
}
