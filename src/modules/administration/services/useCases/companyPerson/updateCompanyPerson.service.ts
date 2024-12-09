import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CompanyPersonResponseDto } from '@app/modules/administration/domain/companyPerson/dto/companyPerson-response.dto';
import { CompanyPerson } from '@app/modules/administration/domain/companyPerson/companyPerson.entity';
import { CompanyPersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/companyPerson/companyPerson.repository';
import { CompanyPersonUpdateDto } from '@app/modules/administration/domain/companyPerson/dto/companyPerson-update.dto';
import { FindOneCompanyPerson } from '@app/modules/administration/services/useCases/companyPerson/findOneCompanyPerson.service';

/**
 * Service class for updating a companyPerson.
 */
@Injectable()
export class UpdateCompanyPerson {
  /**
   * Constructs a new instance of the UpdateCompanyPersonService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _companyPersonRepository - The repository for accessing companyPerson data.
   * @param _findOneCompanyPerson - The use case for finding a single companyPerson.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _companyPersonRepository: CompanyPersonRepository,
    private readonly _findOneCompanyPerson: FindOneCompanyPerson,
  ) {}

  /**
   * Handles the update of a companyPerson item.
   *
   * @param id - The ID of the companyPerson item to update.
   * @param companyPersonUpdateDto - The data to update the companyPerson item with.
   * @returns The updated companyPerson item.
   * @throws NotFoundException if the companyPerson item with the specified ID is not found.
   */
  async handle(
    id: number,
    companyPersonUpdateDto: CompanyPersonUpdateDto,
  ): Promise<CompanyPersonResponseDto> {
    const exist = await this._findOneCompanyPerson.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`CompanyPerson with id ${id} not found`);
    }

    const companyPersonUpdatePayload = this._mapper.map(
      companyPersonUpdateDto,
      CompanyPersonUpdateDto,
      CompanyPerson,
    );

    const companyPerson = await this._companyPersonRepository.update(
      id,
      companyPersonUpdatePayload,
    );

    const response = this._mapper.map(
      companyPerson,
      CompanyPerson,
      CompanyPersonResponseDto,
    );

    return response;
  }
}
