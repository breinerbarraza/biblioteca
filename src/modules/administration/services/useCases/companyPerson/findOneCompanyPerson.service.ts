import { CompanyPersonResponseDto } from '@app/modules/administration/domain/companyPerson/dto/companyPerson-response.dto';
import { CompanyPerson } from '@app/modules/administration/domain/companyPerson/companyPerson.entity';
import { CompanyPersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/companyPerson/companyPerson.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a companyPerson by its ID.
 */
@Injectable()
export class FindOneCompanyPerson {
  /**
   * Constructs a new instance of the FindOneCompanyPersonService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _companyPersonRepository - The repository for accessing companyPerson data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _companyPersonRepository: CompanyPersonRepository,
  ) {}

  /**
   * Retrieves a companyPerson by its ID.
   *
   * @param id - The ID of the companyPerson to retrieve.
   * @returns A Promise that resolves to a CompanyPersonResponseDto object representing the retrieved companyPerson.
   */
  async handle(id: number): Promise<CompanyPersonResponseDto> {
    const companyPerson = await this._companyPersonRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(
      companyPerson,
      CompanyPerson,
      CompanyPersonResponseDto,
    );

    return response;
  }
}
