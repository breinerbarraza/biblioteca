import { Content } from '@app/modules/library/domain/content/content.entity';
import { ContentResponseDto } from '@app/modules/library/domain/content/dto/content-response.dto';
import { ContentRepository } from '@app/modules/library/infrastructure/persistence/repositories/content/content.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a content.
 */
@Injectable()
export class DeleteContent {
  /**
   * Constructs a new instance of the DeleteContentService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _contentRepository - The repository for accessing content data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _contentRepository: ContentRepository,
  ) { }

  /**
   * Handles the deletion of a content item.
   *
   * @param id - The ID of the content item to be deleted.
   * @returns A promise that resolves to a ContentResponseDto representing the deleted content item.
   */
  async handle(id: number): Promise<ContentResponseDto> {
    const content = await this._contentRepository.delete({
      id,
    });

    const response = this._mapper.map(content, Content, ContentResponseDto);

    return response;
  }
}
