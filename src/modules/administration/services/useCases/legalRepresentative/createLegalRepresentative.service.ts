import { LegalRepresentativeRequestDto } from '@app/modules/administration/domain/legalRepresentative/dto/legalRepresentative-request.dto';
import { LegalRepresentativeResponseDto } from '@app/modules/administration/domain/legalRepresentative/dto/legalRepresentative-response.dto';
import { LegalRepresentative } from '@app/modules/administration/domain/legalRepresentative/legalRepresentative.entity';
import { LegalRepresentativeRepository } from '@app/modules/administration/infrastructure/persistence/repositories/legalRepresentative/legalRepresentative.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new legalRepresentative.
 */
@Injectable()
export class CreateLegalRepresentative {
  /**
   * Creates an instance of the CreateLegalRepresentativeService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _legalRepresentativeRepository - The repository for managing LegalRepresentative entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _legalRepresentativeRepository: LegalRepresentativeRepository,
  ) {}

  /**
   * Handles the creation of a new LegalRepresentative.
   *
   * @param createLegalRepresentativeDto - The data transfer object containing the LegalRepresentative details.
   * @returns The response containing the created LegalRepresentative.
   */

  async handle(
    legalRepresentativeRequestDto: LegalRepresentativeRequestDto,
  ): Promise<LegalRepresentativeResponseDto> {
    const legalRepresentativePayload = this._mapper.map(
      legalRepresentativeRequestDto,
      LegalRepresentativeRequestDto,
      LegalRepresentative,
    );

    const legalRepresentative =
      await this._legalRepresentativeRepository.create({
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
