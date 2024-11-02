import { IdentificationTypeResponseDto } from '@app/modules/utilitaria/domain/identificationType/dto/identificationType-response.dto';
import { IdentificationType } from '@app/modules/utilitaria/domain/identificationType/identificationType.entity';
import { IdentificationTypeRepository } from '@app/modules/utilitaria/infrastructure/persistence/repositories/identificationType/identificationType.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a identificationType by its ID.
 */
@Injectable()
export class FindOneIdentificationType {
  /**
   * Constructs a new instance of the FindOneIdentificationTypeService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _identificationTypeRepository - The repository for accessing identificationType data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _identificationTypeRepository: IdentificationTypeRepository,
  ) {}

  /**
   * Retrieves a identificationType by its ID.
   *
   * @param id - The ID of the identificationType to retrieve.
   * @returns A Promise that resolves to a IdentificationTypeResponseDto object representing the retrieved identificationType.
   */
  async handle(id: number): Promise<IdentificationTypeResponseDto> {
    const identificationType = await this._identificationTypeRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(
      identificationType,
      IdentificationType,
      IdentificationTypeResponseDto,
    );

    return response;
  }
}
