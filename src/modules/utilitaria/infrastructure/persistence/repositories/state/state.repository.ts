import {
  GetAllCriteriaType,
  GetOneCriteriaType,
} from '@app/modules/database/types';
import { State } from '@app/modules/utilitaria/domain/state/state.entity';
import { UtilitariaContext } from '@app/modules/utilitaria/infrastructure/persistence/context/utilitariaContext.service';
import { HttpException, Injectable, Scope } from '@nestjs/common';

/**
 * Represents a State repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class StateRepository {
  /**
   * Creates a new instance of StateRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: UtilitariaContext) {}

  /**
   * Retrieves all states from the database.
   * @param options - Optional criteria to filter the states.
   * @returns A promise that resolves to an array of states.
   * @throws HttpException if there's an error retrieving the states from the database.
   */
  async getAll(options?: GetAllCriteriaType<State>): Promise<State[]> {
    try {
      return await this._context.state.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a state by the provided criteria in the database.
   * @param options - The criteria to find the state.
   * @returns A promise that resolves to the found state.
   * @throws HttpException if there's an error finding the state in the database.
   */
  async findBy(options: GetOneCriteriaType<State>): Promise<State> {
    try {
      return await this._context.state.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
