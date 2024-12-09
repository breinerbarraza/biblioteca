import { IdentificationTypeResponseDto } from '@app/modules/utilitaria/domain/identificationType/dto/identificationType-response.dto';
import { IdentificationType } from '@app/modules/utilitaria/domain/identificationType/identificationType.entity';
import { IdentificationTypeRepository } from '@app/modules/utilitaria/infrastructure/persistence/repositories/identificationType/identificationType.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all identificationTypes.
 */
@Injectable()
export class FindAllIdentificationType {
  /**
   * Constructs a new instance of the `FindAllIdentificationTypeService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _identificationTypeRepository - The repository for accessing identificationType data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _identificationTypeRepository: IdentificationTypeRepository,
  ) {}

  /**
   * Handles the finding of all identificationTypes.
   * @returns A promise that resolves to an array of IdentificationTypeResponseDto objects.
   */
  async handle(): Promise<IdentificationTypeResponseDto[]> {
    const identificationTypes =
      await this._identificationTypeRepository.getAll();

    const response = this._mapper.mapArray(
      identificationTypes,
      IdentificationType,
      IdentificationTypeResponseDto,
    );

    return response;
  }
}
