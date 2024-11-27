import { TypeCompanyResponseDto } from '@app/modules/utilitaria/domain/typeCompany/dto/typeCompany-response.dto';
import { TypeCompany } from '@app/modules/utilitaria/domain/typeCompany/typeCompany.entity';
import { TypeCompanyRepository } from '@app/modules/utilitaria/infrastructure/persistence/repositories/typeCompany/typeCompany.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all typeCompanies.
 */
@Injectable()
export class FindAllTypeCompany {
  /**
   * Constructs a new instance of the `FindAllTypeCompanyService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _typeCompanyRepository - The repository for accessing typeCompany data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeCompanyRepository: TypeCompanyRepository,
  ) {}

  /**
   * Handles the finding of all typeCompanys.
   * @returns A promise that resolves to an array of TypeCompanyResponseDto objects.
   */
  async handle(): Promise<TypeCompanyResponseDto[]> {
    const typeCompanys = await this._typeCompanyRepository.getAll();

    const response = this._mapper.mapArray(
      typeCompanys,
      TypeCompany,
      TypeCompanyResponseDto,
    );

    return response;
  }
}
