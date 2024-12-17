import { ProgressResponseDto } from '@app/modules/library/domain/progress/dto/progress-response.dto';
import { ProgressUpdateDto } from '@app/modules/library/domain/progress/dto/progress-update.dto';
import { Progress } from '@app/modules/library/domain/progress/progress.entity';
import { ProgressRepository } from '@app/modules/library/infrastructure/persistence/repositories/progress/progress.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneProgress } from './findOneProgress.service';

/**
 * Service class for updating a progress.
 */
@Injectable()
export class UpdateProgress {
  /**
   * Constructs a new instance of the UpdateProgressService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _progressRepository - The repository for accessing progress data.
   * @param _findOneProgress - The use case for finding a single progress.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _progressRepository: ProgressRepository,
    private readonly _findOneProgress: FindOneProgress,
  ) {}

  /**
   * Handles the update of a progress item.
   *
   * @param id - The ID of the progress item to update.
   * @param progressUpdateDto - The data to update the progress item with.
   * @returns The updated progress item.
   * @throws NotFoundException if the progress item with the specified ID is not found.
   */
  async handle(
    id: number,
    progressUpdateDto: ProgressUpdateDto,
  ): Promise<ProgressResponseDto> {
    const exist = await this._findOneProgress.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`Progress with id ${id} not found`);
    }

    const progressUpdatePayload = this._mapper.map(
      progressUpdateDto,
      ProgressUpdateDto,
      Progress,
    );

    const progress = await this._progressRepository.update(id, progressUpdatePayload);

    const response = this._mapper.map(progress, Progress, ProgressResponseDto);

    return response;
  }
}
