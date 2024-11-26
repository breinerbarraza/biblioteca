import { CompanyPersonRequestDto } from '@app/modules/administration/domain/companyPerson/dto/companyPerson-request.dto';
import { CompanyPersonResponseDto } from '@app/modules/administration/domain/companyPerson/dto/companyPerson-response.dto';
import { CompanyPerson } from '@app/modules/administration/domain/companyPerson/companyPerson.entity';
import { CompanyPersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/companyPerson/companyPerson.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new companyPerson.
 */
@Injectable()
export class CreateCompanyPerson {
  /**
   * Creates an instance of the CreateCompanyPersonService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _companyPersonRepository - The repository for managing CompanyPerson entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _companyPersonRepository: CompanyPersonRepository,
  ) {}

  /**
   * Handles the creation of a new companyPerson.
   *
   * @param createCompanyPersonDto - The data transfer object containing the companyPerson details.
   * @returns The response containing the created companyPerson.
   */
  async handle(
    companyPersonRequestDto: CompanyPersonRequestDto,
  ): Promise<CompanyPersonResponseDto> {
    const companyPersonPayload = this._mapper.map(
      companyPersonRequestDto,
      CompanyPersonRequestDto,
      CompanyPerson,
    );

    const companyPerson =
      await this._companyPersonRepository.create(companyPersonPayload);

    const response = this._mapper.map(
      companyPerson,
      CompanyPerson,
      CompanyPersonResponseDto,
    );

    return response;
  }
}
