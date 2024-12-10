import { LegalRepresentativeRepository } from '@app/modules/administration/infrastructure/persistence/repositories/legalRepresentative/legalRepresentative.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneLegalRepresentative } from './findOneLegalRepresentative.service';
import { LegalRepresentativeUpdateDto } from '@app/modules/administration/domain/legalRepresentative/dto/legalRePresentative-update.dto';
import { LegalRepresentativeResponseDto } from '@app/modules/administration/domain/legalRepresentative/dto/legalRepresentative-response.dto';
import { LegalRepresentative } from '@app/modules/administration/domain/legalRepresentative/legalRepresentative.entity';

/**
 * Service class for updating a legalRepresentative.
 */
@Injectable()
export class UpdateLegalRepresentative {
  /**
   * Constructs a new instance of the UpdateCompanyService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _legalRepresentativeRepository - The repository for accessing legalRepresentative data.
   * @param _findOneLegalRepresentative - The use case for finding a single legalRepresentative.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _legalRepresentativeRepository: LegalRepresentativeRepository,
    private readonly _findOneLegalRepresentative: FindOneLegalRepresentative,
  ) {}

  /**
   * Handles the update of a legalRepresentative item.
   *
   * @param id - The ID of the legalRepresentative item to update.
   * @param legalRepresentativeUpdateDto - The data to update the legalRepresentative item with.
   * @returns The updated legalRepresentative item.
   * @throws NotFoundException if the legalRepresentative item with the specified ID is not found.
   */
  async handle(
    id: number,
    legalRepresentativeUpdateDto: LegalRepresentativeUpdateDto,
  ): Promise<LegalRepresentativeResponseDto> {
    const exist = await this._findOneLegalRepresentative.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(
        `legalRepresentative with id ${id} not found`,
      );
    }

    const legalRepresentativePayload = this._mapper.map(
      legalRepresentativeUpdateDto,
      LegalRepresentativeUpdateDto,
      LegalRepresentative,
    );

    const legalRepresentative =
      await this._legalRepresentativeRepository.update(id, {
        ...legalRepresentativePayload,
        fullName: `${legalRepresentativePayload?.name} ${legalRepresentativePayload?.middleName} ${legalRepresentativePayload?.firstSurname} ${legalRepresentativePayload?.secondSurname}`,
      });

    const response = this._mapper.map(
      legalRepresentative,
      LegalRepresentative,
      LegalRepresentativeResponseDto,
    );

    return response;
  }
}
