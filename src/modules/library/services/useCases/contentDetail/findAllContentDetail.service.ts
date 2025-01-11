import { ContentDetail } from '@app/modules/library/domain/contentDetail/contentDetail.entity';
import { ContentDetailResponseDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-response.dto';
import { ContentDetailRepository } from '@app/modules/library/infrastructure/persistence/repositories/contentDetail/contentDetail.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all contentDetails.
 */
@Injectable()
export class FindAllContentDetail {
  /**
   * Constructs a new instance of the `FindAllContentDetailService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _contentDetailRepository - The repository for accessing contentDetail data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _contentDetailRepository: ContentDetailRepository,
  ) {}

  /**
   * Handles the finding of all contentDetails.
   * @returns A promise that resolves to an array of ContentDetailResponseDto objects.
   */
  async handle(): Promise<ContentDetailResponseDto[]> {
    const contentDetails = await this._contentDetailRepository.getAll({
      relations: { user: true },
    });

    const response = this._mapper.mapArray(
      contentDetails,
      ContentDetail,
      ContentDetailResponseDto,
    );

    return response;
  }
}
