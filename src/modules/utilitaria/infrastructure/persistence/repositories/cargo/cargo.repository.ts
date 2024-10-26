import {
  GetAllCriteriaType,
  GetOneCriteriaType,
} from '@app/modules/database/types';
import { Cargo } from '@app/modules/utilitaria/domain/cargo/cargo.entity';
import { UtilitariaContext } from '@app/modules/utilitaria/infrastructure/persistence/context/utilitariaContext.service';
import { HttpException, Injectable, Scope } from '@nestjs/common';

/**
 * Represents a Cargo repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class CargoRepository {
  /**
   * Creates a new instance of CargoRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: UtilitariaContext) {}

  /**
   * Retrieves all cargos from the database.
   * @param options - Optional criteria to filter the cargos.
   * @returns A promise that resolves to an array of cargos.
   * @throws HttpException if there's an error retrieving the cargos from the database.
   */
  async getAll(options?: GetAllCriteriaType<Cargo>): Promise<Cargo[]> {
    try {
      return await this._context.cargo.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a cargo by the provided criteria in the database.
   * @param options - The criteria to find the cargo.
   * @returns A promise that resolves to the found cargo.
   * @throws HttpException if there's an error finding the cargo in the database.
   */
  async findBy(options: GetOneCriteriaType<Cargo>): Promise<Cargo> {
    try {
      return await this._context.cargo.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
