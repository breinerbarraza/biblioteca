import { Content } from '@app/modules/library/domain/content/content.entity';
import { ContentResponseDto } from '@app/modules/library/domain/content/dto/content-response.dto';
import { ContentRepository } from '@app/modules/library/infrastructure/persistence/repositories/content/content.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all contents.
 */
@Injectable()
export class FindAllContent {
  /**
   * Constructs a new instance of the `FindAllContentService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _contentRepository - The repository for accessing content data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _contentRepository: ContentRepository,
  ) {}

  /**
   * Handles the finding of all contents.
   * @returns A promise that resolves to an array of ContentResponseDto objects.
   */
  async handle(): Promise<ContentResponseDto[]> {
    const contents = await this._contentRepository.getAll({
      relations: { user: true }
    });

    const response = this._mapper.mapArray(contents, Content, ContentResponseDto);

    return response;
  }
}
