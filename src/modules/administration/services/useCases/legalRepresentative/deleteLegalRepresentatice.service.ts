import { LegalRepresentativeResponseDto } from '@app/modules/administration/domain/legalRepresentative/dto/legalRepresentative-response.dto';
import { LegalRepresentative } from '@app/modules/administration/domain/legalRepresentative/legalRepresentative.entity';
import { LegalRepresentativeRepository } from '@app/modules/administration/infrastructure/persistence/repositories/legalRepresentative/legalRepresentative.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteLegalRepresentative {
  /**
   * Constructs a new instance of the DeleteCompanyService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _legalRepresentativeRepository - The repository for accessing company data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _legalRepresentativeRepository: LegalRepresentativeRepository,
  ) {}

  /**
   * Handles the deletion of a legalRepresentative item.
   *
   * @param id - The ID of the legalRepresentative item to be deleted.
   * @returns A promise that resolves to a legalRepresentativeResponseDto representing the deleted company item.
   */
  async handle(id: number): Promise<LegalRepresentativeResponseDto> {
    const legalRepresentative =
      await this._legalRepresentativeRepository.delete({
        id,
      });

    const response = this._mapper.map(
      legalRepresentative,
      LegalRepresentative,
      LegalRepresentativeResponseDto,
    );

    return response;
  }
}
