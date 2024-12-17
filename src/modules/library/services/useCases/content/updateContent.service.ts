import { ContentRepository } from '@app/modules/library/infrastructure/persistence/repositories/content/content.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneContent } from './findOneContent.service';
import { ContentUpdateDto } from '@app/modules/library/domain/content/dto/content-update.dto';
import { ContentResponseDto } from '@app/modules/library/domain/content/dto/content-response.dto';
import { Content } from '@app/modules/library/domain/content/content.entity';

/**
 * Service class for updating a content.
 */
@Injectable()
export class UpdateContent {
  /**
   * Constructs a new instance of the UpdateContentService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _contentRepository - The repository for accessing content data.
   * @param _findOneContent - The use case for finding a single content.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _contentRepository: ContentRepository,
    private readonly _findOneContent: FindOneContent,
  ) {}

  /**
   * Handles the update of a content item.
   *
   * @param id - The ID of the content item to update.
   * @param contentUpdateDto - The data to update the content item with.
   * @returns The updated content item.
   * @throws NotFoundException if the content item with the specified ID is not found.
   */
  async handle(
    id: number,
    contentUpdateDto: ContentUpdateDto,
  ): Promise<ContentResponseDto> {
    const exist = await this._findOneContent.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`Content with id ${id} not found`);
    }

    const contentUpdatePayload = this._mapper.map(
      contentUpdateDto,
      ContentUpdateDto,
      Content,
    );

    const content = await this._contentRepository.update(id, contentUpdatePayload);

    const response = this._mapper.map(content, Content, ContentResponseDto);

    return response;
  }
}
