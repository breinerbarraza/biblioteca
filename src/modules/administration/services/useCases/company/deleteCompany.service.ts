import { CompanyResponseDto } from '@app/modules/administration/domain/company/dto/company-response.dto';
import { Company } from '@app/modules/administration/domain/company/company.entity';
import { CompanyRepository } from '@app/modules/administration/infrastructure/persistence/repositories/company/company.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a company.
 */
@Injectable()
export class DeleteCompany {
  /**
   * Constructs a new instance of the DeleteCompanyService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _companyRepository - The repository for accessing company data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _companyRepository: CompanyRepository,
  ) {}

  /**
   * Handles the deletion of a company item.
   *
   * @param id - The ID of the company item to be deleted.
   * @returns A promise that resolves to a CompanyResponseDto representing the deleted company item.
   */
  async handle(id: number): Promise<CompanyResponseDto> {
    const company = await this._companyRepository.delete({
      id,
    });

    const response = this._mapper.map(company, Company, CompanyResponseDto);

    return response;
  }
}
