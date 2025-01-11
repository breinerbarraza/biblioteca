import { ContentDetailRepository } from '@app/modules/library/infrastructure/persistence/repositories/contentDetail/contentDetail.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneContentDetail } from './findOneContentDetail.service';
import { ContentDetailUpdateDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-update.dto';
import { ContentDetailResponseDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-response.dto';
import { ContentDetail } from '@app/modules/library/domain/contentDetail/contentDetail.entity';

/**
 * Service class for updating a contentDetail.
 */
@Injectable()
export class UpdateContentDetail {
  /**
   * Constructs a new instance of the UpdateContentDetailService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _contentDetailRepository - The repository for accessing contentDetail data.
   * @param _findOneContentDetail - The use case for finding a single contentDetail.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _contentDetailRepository: ContentDetailRepository,
    private readonly _findOneContentDetail: FindOneContentDetail,
  ) {}

  /**
   * Handles the update of a contentDetail item.
   *
   * @param id - The ID of the contentDetail item to update.
   * @param contentDetailUpdateDto - The data to update the contentDetail item with.
   * @returns The updated contentDetail item.
   * @throws NotFoundException if the contentDetail item with the specified ID is not found.
   */
  async handle(
    id: number,
    contentDetailUpdateDto: ContentDetailUpdateDto,
  ): Promise<ContentDetailResponseDto> {
    const exist = await this._findOneContentDetail.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`ContentDetail with id ${id} not found`);
    }

    const contentDetailUpdatePayload = this._mapper.map(
      contentDetailUpdateDto,
      ContentDetailUpdateDto,
      ContentDetail,
    );

    const contentDetail = await this._contentDetailRepository.update(
      id,
      contentDetailUpdatePayload,
    );

    const response = this._mapper.map(
      contentDetail,
      ContentDetail,
      ContentDetailResponseDto,
    );

    return response;
  }
}
