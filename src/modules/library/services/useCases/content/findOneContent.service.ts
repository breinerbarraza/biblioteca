import { Content } from '@app/modules/library/domain/content/content.entity';
import { ContentResponseDto } from '@app/modules/library/domain/content/dto/content-response.dto';
import { ContentRepository } from '@app/modules/library/infrastructure/persistence/repositories/content/content.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a content by its ID.
 */
@Injectable()
export class FindOneContent {
  /**
   * Constructs a new instance of the FindOneContentService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _contentRepository - The repository for accessing content data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _contentRepository: ContentRepository,
  ) {}

  /**
   * Retrieves a content by its ID.
   *
   * @param id - The ID of the content to retrieve.
   * @returns A Promise that resolves to a ContentResponseDto object representing the retrieved content.
   */
  async handle(id: number): Promise<ContentResponseDto> {
    const content = await this._contentRepository.findBy({
      where: { id },
      relations: { user: true }
    });

    const response = this._mapper.map(content, Content, ContentResponseDto);

    return response;
  }
}
