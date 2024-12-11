import { CompanyPersonResponseDto } from '@app/modules/administration/domain/companyPerson/dto/companyPerson-response.dto';
import { CompanyPerson } from '@app/modules/administration/domain/companyPerson/companyPerson.entity';
import { CompanyPersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/companyPerson/companyPerson.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a companyPerson.
 */
@Injectable()
export class DeleteCompanyPerson {
  /**
   * Constructs a new instance of the DeleteCompanyPersonService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _companyPersonRepository - The repository for accessing companyPerson data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _companyPersonRepository: CompanyPersonRepository,
  ) {}

  /**
   * Handles the deletion of a companyPerson item.
   *
   * @param id - The ID of the companyPerson item to be deleted.
   * @returns A promise that resolves to a CompanyPersonResponseDto representing the deleted companyPerson item.
   */
  async handle(id: number): Promise<CompanyPersonResponseDto> {
    const companyPerson = await this._companyPersonRepository.delete({
      id,
    });

    const response = this._mapper.map(
      companyPerson,
      CompanyPerson,
      CompanyPersonResponseDto,
    );

    return response;
  }
}
