import { CompanyRequestDto } from '@app/modules/administration/domain/company/dto/company-request.dto';
import { CompanyResponseDto } from '@app/modules/administration/domain/company/dto/company-response.dto';
import { Company } from '@app/modules/administration/domain/company/company.entity';
import { CompanyRepository } from '@app/modules/administration/infrastructure/persistence/repositories/company/company.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new company.
 */
@Injectable()
export class CreateCompany {
  /**
   * Creates an instance of the CreateCompanyService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _companyRepository - The repository for managing Company entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _companyRepository: CompanyRepository,
  ) {}

  /**
   * Handles the creation of a new company.
   *
   * @param createCompanyDto - The data transfer object containing the company details.
   * @returns The response containing the created company.
   */
  async handle(
    companyRequestDto: CompanyRequestDto,
  ): Promise<CompanyResponseDto> {
    const companyPayload = this._mapper.map(
      companyRequestDto,
      CompanyRequestDto,
      Company,
    );

    const company = await this._companyRepository.create(companyPayload);

    const response = this._mapper.map(company, Company, CompanyResponseDto);

    return response;
  }
}
