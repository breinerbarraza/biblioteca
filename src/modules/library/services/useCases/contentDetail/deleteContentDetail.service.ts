import { ContentDetail } from '@app/modules/library/domain/contentDetail/contentDetail.entity';
import { ContentDetailResponseDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-response.dto';
import { ContentDetailRepository } from '@app/modules/library/infrastructure/persistence/repositories/contentDetail/contentDetail.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a contentDetail.
 */
@Injectable()
export class DeleteContentDetail {
  /**
   * Constructs a new instance of the DeleteContentDetailService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _contentDetailRepository - The repository for accessing contentDetail data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _contentDetailRepository: ContentDetailRepository,
  ) {}

  /**
   * Handles the deletion of a contentDetail item.
   *
   * @param id - The ID of the contentDetail item to be deleted.
   * @returns A promise that resolves to a ContentDetailResponseDto representing the deleted contentDetail item.
   */
  async handle(id: number): Promise<ContentDetailResponseDto> {
    const contentDetail = await this._contentDetailRepository.delete({
      id,
    });

    const response = this._mapper.map(
      contentDetail,
      ContentDetail,
      ContentDetailResponseDto,
    );

    return response;
  }
}
