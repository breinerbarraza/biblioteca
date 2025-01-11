import { ContentDetail } from '@app/modules/library/domain/contentDetail/contentDetail.entity';
import { ContentDetailRequestDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-request.dto';
import { ContentDetailResponseDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-response.dto';
import { ContentDetailRepository } from '@app/modules/library/infrastructure/persistence/repositories/contentDetail/contentDetail.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new contentDetail.
 */
@Injectable()
export class CreateContentDetail {
  /**
   * Creates an instance of the CreateContentDetailService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _contentDetailRepository - The repository for managing ContentDetail entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _contentDetailRepository: ContentDetailRepository,
  ) {}

  /**
   * Handles the creation of a new contentDetail.
   *
   * @param createContentDetailDto - The data transfer object containing the contentDetail details.
   * @returns The response containing the created contentDetail.
   */
  async handle(
    contentDetailRequestDto: ContentDetailRequestDto,
  ): Promise<ContentDetailResponseDto> {
    const contentDetailPayload = this._mapper.map(
      contentDetailRequestDto,
      ContentDetailRequestDto,
      ContentDetail,
    );

    const contentDetail =
      await this._contentDetailRepository.create(contentDetailPayload);

    const response = this._mapper.map(
      contentDetail,
      ContentDetail,
      ContentDetailResponseDto,
    );

    return response;
  }
}
