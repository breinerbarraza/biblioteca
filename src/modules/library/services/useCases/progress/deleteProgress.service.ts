import { ProgressResponseDto } from '@app/modules/library/domain/progress/dto/progress-response.dto';
import { Progress } from '@app/modules/library/domain/progress/progress.entity';
import { ProgressRepository } from '@app/modules/library/infrastructure/persistence/repositories/progress/progress.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a progress.
 */
@Injectable()
export class DeleteProgress {
  /**
   * Constructs a new instance of the DeleteProgressService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _progressRepository - The repository for accessing progress data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _progressRepository: ProgressRepository,
  ) { }

  /**
   * Handles the deletion of a progress item.
   *
   * @param id - The ID of the progress item to be deleted.
   * @returns A promise that resolves to a ProgressResponseDto representing the deleted progress item.
   */
  async handle(id: number): Promise<ProgressResponseDto> {
    const progress = await this._progressRepository.delete({
      id,
    });

    const response = this._mapper.map(progress, Progress, ProgressResponseDto);

    return response;
  }
}
