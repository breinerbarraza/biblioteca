import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CompanyResponseDto } from '@app/modules/administration/domain/company/dto/company-response.dto';
import { Company } from '@app/modules/administration/domain/company/company.entity';
import { CompanyRepository } from '@app/modules/administration/infrastructure/persistence/repositories/company/company.repository';
import { CompanyUpdateDto } from '@app/modules/administration/domain/company/dto/company-update.dto';
import { FindOneCompany } from '@app/modules/administration/services/useCases/company/findOneCompany.service';
import { UpdateLegalRepresentative } from '@app/modules/administration/services/useCases/legalRepresentative/updateLegalRepresentative.service';

/**
 * Service class for updating a company.
 */
@Injectable()
export class UpdateCompany {
  /**
   * Constructs a new instance of the UpdateCompanyService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _companyRepository - The repository for accessing company data.
   * @param _findOneCompany - The use case for finding a single company.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _companyRepository: CompanyRepository,
    private readonly _findOneCompany: FindOneCompany,
    private readonly _updateLegalRepresentative: UpdateLegalRepresentative,
  ) {}

  /**
   * Handles the update of a company item.
   *
   * @param id - The ID of the company item to update.
   * @param companyUpdateDto - The data to update the company item with.
   * @returns The updated company item.
   * @throws NotFoundException if the company item with the specified ID is not found.
   */
  async handle(
    id: number,
    companyUpdateDto: CompanyUpdateDto,
  ): Promise<CompanyResponseDto> {
    const exist = await this._findOneCompany.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`Company with id ${id} not found`);
    }

    const companyUpdatePayload = this._mapper.map(
      companyUpdateDto,
      CompanyUpdateDto,
      Company,
    );

    const company = await this._companyRepository.update(id, {
      ...companyUpdatePayload,
      fullName:
        companyUpdatePayload?.idTypeCompany === 1
          ? companyUpdatePayload?.companyName
          : `${companyUpdatePayload?.name} ${companyUpdatePayload?.middleName} ${companyUpdatePayload?.firstSurname} ${companyUpdatePayload?.secondSurname}`,
    });

    await this._updateLegalRepresentative.handle(
      companyUpdateDto?.legalRepresentative?.id,
      companyUpdateDto?.legalRepresentative,
    );

    const response = this._mapper.map(company, Company, CompanyResponseDto);

    return response;
  }
}
