import { LegalRepresentativeResponseDto } from '@app/modules/administration/domain/legalRepresentative/dto/legalRepresentative-response.dto';
import { LegalRepresentative } from '@app/modules/administration/domain/legalRepresentative/legalRepresentative.entity';
import { LegalRepresentativeRepository } from '@app/modules/administration/infrastructure/persistence/repositories/legalRepresentative/legalRepresentative.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a LegalRepresentative by its ID.
 */
@Injectable()
export class FindAllLegalRepresentative {
  /**
   * Constructs a new instance of the `FindAllLegalRepresentativeService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _legalRepresentativeRepository - The repository for accessing LegalRepresentative data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _legalRepresentativeRepository: LegalRepresentativeRepository,
  ) {}

  /**
   * Handles the finding of all companies.
   * @returns A promise that resolves to an array of LegalRepresentativeResponseDto objects.
   */
  async handle(): Promise<LegalRepresentativeResponseDto[]> {
    const legalReprensentative =
      await this._legalRepresentativeRepository.getAll({
        order: { id: 'ASC' },
        relations: { cities: true, genders: true },
      });

    const response = this._mapper.mapArray(
      legalReprensentative,
      LegalRepresentative,
      LegalRepresentativeResponseDto,
    );

    return response;
  }
}
