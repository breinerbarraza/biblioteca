import { ContentDetail } from '@app/modules/library/domain/contentDetail/contentDetail.entity';
import { ContentDetailResponseDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-response.dto';
import { ContentDetailRepository } from '@app/modules/library/infrastructure/persistence/repositories/contentDetail/contentDetail.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a contentDetail by its ID.
 */
@Injectable()
export class FindOneContentDetail {
  /**
   * Constructs a new instance of the FindOneContentDetailService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _contentDetailRepository - The repository for accessing contentDetail data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _contentDetailRepository: ContentDetailRepository,
  ) {}

  /**
   * Retrieves a contentDetail by its ID.
   *
   * @param id - The ID of the contentDetail to retrieve.
   * @returns A Promise that resolves to a ContentDetailResponseDto object representing the retrieved contentDetail.
   */
  async handle(id: number): Promise<ContentDetailResponseDto> {
    const contentDetail = await this._contentDetailRepository.findBy({
      where: { id },
      relations: { user: true },
    });

    const response = this._mapper.map(
      contentDetail,
      ContentDetail,
      ContentDetailResponseDto,
    );

    return response;
  }
}
