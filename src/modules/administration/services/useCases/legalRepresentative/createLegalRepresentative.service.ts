import { LegalRepresentativeRequestDto } from '@app/modules/administration/domain/legalReprensentative/dto/legalRepresentative-request.dto';
import { LegalRepresentativeResponseDto } from '@app/modules/administration/domain/legalReprensentative/dto/legalRepresentative-response.dto';
import { LegalRepresentative } from '@app/modules/administration/domain/legalReprensentative/legalRepresentative.entity';
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
    legalReprensentativeRequestDto: LegalRepresentativeRequestDto,
  ): Promise<LegalRepresentativeResponseDto> {
    const legalReprensentativePayload = this._mapper.map(
      legalReprensentativeRequestDto,
      LegalRepresentativeRequestDto,
      LegalRepresentative,
    );

    const legalRepresentative =
      await this._legalRepresentativeRepository.create(
        legalReprensentativePayload,
      );
    const response = this._mapper.map(
      legalRepresentative,
      LegalRepresentative,
      LegalRepresentativeResponseDto,
    );

    return response;
  }
}
