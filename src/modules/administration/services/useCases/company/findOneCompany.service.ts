import { CompanyResponseDto } from '@app/modules/administration/domain/company/dto/company-response.dto';
import { Company } from '@app/modules/administration/domain/company/company.entity';
import { CompanyRepository } from '@app/modules/administration/infrastructure/persistence/repositories/company/company.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a company by its ID.
 */
@Injectable()
export class FindOneCompany {
  /**
   * Constructs a new instance of the FindOneCompanyService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _companyRepository - The repository for accessing company data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _companyRepository: CompanyRepository,
  ) {}

  /**
   * Retrieves a company by its ID.
   *
   * @param id - The ID of the company to retrieve.
   * @returns A Promise that resolves to a CompanyResponseDto object representing the retrieved company.
   */
  async handle(id: number): Promise<CompanyResponseDto> {
    const company = await this._companyRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(company, Company, CompanyResponseDto);

    return response;
  }
}
