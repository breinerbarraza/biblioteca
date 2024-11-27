import {
  GetAllCriteriaType,
  GetOneCriteriaType,
} from '@app/modules/database/types';
import { Cities } from '@app/modules/utilitaria/domain/cities/cities.entity';
import { UtilitariaContext } from '@app/modules/utilitaria/infrastructure/persistence/context/utilitariaContext.service';
import { HttpException, Injectable, Scope } from '@nestjs/common';

/**
 * Represents a Cities repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class CitiesRepository {
  /**
   * Creates a new instance of CitiesRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: UtilitariaContext) {}

  /**
   * Retrieves all .cities from the database.
   * @param options - Optional criteria to filter the .cities.
   * @returns A promise that resolves to an array of .cities.
   * @throws HttpException if there's an error retrieving the .cities from the database.
   */
  async getAll(options?: GetAllCriteriaType<Cities>): Promise<Cities[]> {
    try {
      return await this._context.cities.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a .cities by the provided criteria in the database.
   * @param options - The criteria to find the .cities.
   * @returns A promise that resolves to the found .cities.
   * @throws HttpException if there's an error finding the .cities in the database.
   */
  async findBy(options: GetOneCriteriaType<Cities>): Promise<Cities> {
    try {
      return await this._context.cities.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
