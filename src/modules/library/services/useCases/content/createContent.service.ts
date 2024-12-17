import { Content } from '@app/modules/library/domain/content/content.entity';
import { ContentRequestDto } from '@app/modules/library/domain/content/dto/content-request.dto';
import { ContentResponseDto } from '@app/modules/library/domain/content/dto/content-response.dto';
import { ContentRepository } from '@app/modules/library/infrastructure/persistence/repositories/content/content.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new content.
 */
@Injectable()
export class CreateContent {
  /**
   * Creates an instance of the CreateContentService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _contentRepository - The repository for managing Content entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _contentRepository: ContentRepository,
  ) {}

  /**
   * Handles the creation of a new content.
   *
   * @param createContentDto - The data transfer object containing the content details.
   * @returns The response containing the created content.
   */
  async handle(contentRequestDto: ContentRequestDto): Promise<ContentResponseDto> {
    const contentPayload = this._mapper.map(
      contentRequestDto,
      ContentRequestDto,
      Content,
    );

    const content = await this._contentRepository.create(contentPayload);

    const response = this._mapper.map(content, Content, ContentResponseDto);

    return response;
  }
}
