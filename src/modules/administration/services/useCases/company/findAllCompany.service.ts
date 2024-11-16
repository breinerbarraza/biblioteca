import { CompanyResponseDto } from '@app/modules/administration/domain/company/dto/company-response.dto';
import { Company } from '@app/modules/administration/domain/company/company.entity';
import { CompanyRepository } from '@app/modules/administration/infrastructure/persistence/repositories/company/company.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all companies.
 */
@Injectable()
export class FindAllCompany {
  /**
   * Constructs a new instance of the `FindAllCompanyService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _companyRepository - The repository for accessing company data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _companyRepository: CompanyRepository,
  ) {}

  /**
   * Handles the finding of all companies.
   * @returns A promise that resolves to an array of CompanyResponseDto objects.
   */
  async handle(): Promise<CompanyResponseDto[]> {
    const companies = await this._companyRepository.getAll();

    const response = this._mapper.mapArray(
      companies,
      Company,
      CompanyResponseDto,
    );

    return response;
  }
}
