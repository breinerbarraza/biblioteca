import { CompanyPersonResponseDto } from '@app/modules/administration/domain/companyPerson/dto/companyPerson-response.dto';
import { CompanyPerson } from '@app/modules/administration/domain/companyPerson/companyPerson.entity';
import { CompanyPersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/companyPerson/companyPerson.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all companyPersons.
 */
@Injectable()
export class FindAllCompanyPerson {
  /**
   * Constructs a new instance of the `FindAllCompanyPersonService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _companyPersonRepository - The repository for accessing companyPerson data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _companyPersonRepository: CompanyPersonRepository,
  ) {}

  /**
   * Handles the finding of all companyPersons.
   * @returns A promise that resolves to an array of CompanyPersonResponseDto objects.
   */
  async handle(): Promise<CompanyPersonResponseDto[]> {
    const companyPersons = await this._companyPersonRepository.getAll();

    const response = this._mapper.mapArray(
      companyPersons,
      CompanyPerson,
      CompanyPersonResponseDto,
    );

    return response;
  }
}
