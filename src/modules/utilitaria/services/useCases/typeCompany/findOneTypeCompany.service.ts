import { TypeCompanyResponseDto } from '@app/modules/utilitaria/domain/typeCompany/dto/typeCompany-response.dto';
import { TypeCompany } from '@app/modules/utilitaria/domain/typeCompany/typeCompany.entity';
import { TypeCompanyRepository } from '@app/modules/utilitaria/infrastructure/persistence/repositories/typeCompany/typeCompany.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a typeCompany by its ID.
 */
@Injectable()
export class FindOneTypeCompany {
  /**
   * Constructs a new instance of the FindOneTypeCompanyService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _typeCompanyRepository - The repository for accessing typeCompany data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeCompanyRepository: TypeCompanyRepository,
  ) {}

  /**
   * Retrieves a typeCompany by its ID.
   *
   * @param id - The ID of the typeCompany to retrieve.
   * @returns A Promise that resolves to a TypeCompanyResponseDto object representing the retrieved typeCompany.
   */
  async handle(id: number): Promise<TypeCompanyResponseDto> {
    const typeCompany = await this._typeCompanyRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(
      typeCompany,
      TypeCompany,
      TypeCompanyResponseDto,
    );

    return response;
  }
}
