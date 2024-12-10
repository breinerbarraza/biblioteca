import { LegalRepresentativeResponseDto } from '@app/modules/administration/domain/legalRepresentative/dto/legalRepresentative-response.dto';
import { LegalRepresentative } from '@app/modules/administration/domain/legalRepresentative/legalRepresentative.entity';
import { LegalRepresentativeRepository } from '@app/modules/administration/infrastructure/persistence/repositories/legalRepresentative/legalRepresentative.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a company by its ID.
 */
@Injectable()
export class FindOneLegalRepresentative {
  /**
   * Constructs a new instance of the FindOneCompanyService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _legalRepresentativeRepository - The repository for accessing company data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _legalRepresentativeRepository: LegalRepresentativeRepository,
  ) {}

  /**
   * Retrieves a LegalRepresentative by its ID.
   *
   * @param id - The ID of the LegalRepresentative to retrieve.
   * @returns A Promise that resolves to a LegalRepresentativeResponseDto object representing the retrieved company.
   */
  async handle(id: number): Promise<LegalRepresentativeResponseDto> {
    const legalReprensentative =
      await this._legalRepresentativeRepository.findBy({
        where: { id },
      });

    const response = this._mapper.map(
      legalReprensentative,
      LegalRepresentative,
      LegalRepresentativeResponseDto,
    );

    return response;
  }
}
