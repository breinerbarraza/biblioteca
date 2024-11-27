import {
  GetAllCriteriaType,
  GetOneCriteriaType,
} from '@app/modules/database/types';
import { TypeCompany } from '@app/modules/utilitaria/domain/typeCompany/typeCompany.entity';
import { UtilitariaContext } from '@app/modules/utilitaria/infrastructure/persistence/context/utilitariaContext.service';
import { HttpException, Injectable, Scope } from '@nestjs/common';

/**
 * Represents a TypeCompany repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class TypeCompanyRepository {
  /**
   * Creates a new instance of TypeCompanyRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: UtilitariaContext) {}

  /**
   * Retrieves all typeCompanys from the database.
   * @param options - Optional criteria to filter the typeCompanys.
   * @returns A promise that resolves to an array of typeCompanys.
   * @throws HttpException if there's an error retrieving the typeCompanys from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<TypeCompany>,
  ): Promise<TypeCompany[]> {
    try {
      return await this._context.typeCompany.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a typeCompany by the provided criteria in the database.
   * @param options - The criteria to find the typeCompany.
   * @returns A promise that resolves to the found typeCompany.
   * @throws HttpException if there's an error finding the typeCompany in the database.
   */
  async findBy(options: GetOneCriteriaType<TypeCompany>): Promise<TypeCompany> {
    try {
      return await this._context.typeCompany.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
