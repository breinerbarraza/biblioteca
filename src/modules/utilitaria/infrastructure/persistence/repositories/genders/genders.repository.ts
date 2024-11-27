import {
  GetAllCriteriaType,
  GetOneCriteriaType,
} from '@app/modules/database/types';
import { Genders } from '@app/modules/utilitaria/domain/genders/genders.entity';
import { UtilitariaContext } from '@app/modules/utilitaria/infrastructure/persistence/context/utilitariaContext.service';
import { HttpException, Injectable, Scope } from '@nestjs/common';

/**
 * Represents a Genders repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class GendersRepository {
  /**
   * Creates a new instance of GendersRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: UtilitariaContext) {}

  /**
   * Retrieves all .genders from the database.
   * @param options - Optional criteria to filter the .genders.
   * @returns A promise that resolves to an array of .genders.
   * @throws HttpException if there's an error retrieving the .genders from the database.
   */
  async getAll(options?: GetAllCriteriaType<Genders>): Promise<Genders[]> {
    try {
      return await this._context.genders.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a .genders by the provided criteria in the database.
   * @param options - The criteria to find the .genders.
   * @returns A promise that resolves to the found .genders.
   * @throws HttpException if there's an error finding the .genders in the database.
   */
  async findBy(options: GetOneCriteriaType<Genders>): Promise<Genders> {
    try {
      return await this._context.genders.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
