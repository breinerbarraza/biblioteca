import { ProgressResponseDto } from '@app/modules/library/domain/progress/dto/progress-response.dto';
import { Progress } from '@app/modules/library/domain/progress/progress.entity';
import { ProgressRepository } from '@app/modules/library/infrastructure/persistence/repositories/progress/progress.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all progress.
 */
@Injectable()
export class FindAllProgress {
  /**
   * Constructs a new instance of the `FindAllProgressService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _contentRepository - The repository for accessing content data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _contentRepository: ProgressRepository,
  ) {}

  /**
   * Handles the finding of all progress.
   * @returns A promise that resolves to an array of ProgressResponseDto objects.
   */
  async handle(): Promise<ProgressResponseDto[]> {
    const progress = await this._contentRepository.getAll({
      relations: { user: true, content: true }
    });

    const response = this._mapper.mapArray(progress, Progress, ProgressResponseDto);

    return response;
  }
}
