import { ProgressRequestDto } from '@app/modules/library/domain/progress/dto/progress-request.dto';
import { ProgressResponseDto } from '@app/modules/library/domain/progress/dto/progress-response.dto';
import { Progress } from '@app/modules/library/domain/progress/progress.entity';
import { ProgressRepository } from '@app/modules/library/infrastructure/persistence/repositories/progress/progress.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new progress.
 */
@Injectable()
export class CreateProgress {
  /**
   * Creates an instance of the CreateProgressService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _progressRepository - The repository for managing Progress entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _progressRepository: ProgressRepository,
  ) {}

  /**
   * Handles the creation of a new progress.
   *
   * @param createProgressDto - The data transfer object containing the progress details.
   * @returns The response containing the created progress.
   */
  async handle(progressRequestDto: ProgressRequestDto): Promise<ProgressResponseDto> {
    const progressPayload = this._mapper.map(
      progressRequestDto,
      ProgressRequestDto,
      Progress,
    );

    const progress = await this._progressRepository.create(progressPayload);

    const response = this._mapper.map(progress, Progress, ProgressResponseDto);

    return response;
  }
}
