import {
  GetAllCriteriaType,
  GetOneCriteriaType,
} from '@app/modules/database/types';
import { IdentificationType } from '@app/modules/utilitaria/domain/identificationType/identificationType.entity';
import { UtilitariaContext } from '@app/modules/utilitaria/infrastructure/persistence/context/utilitariaContext.service';
import { HttpException, Injectable, Scope } from '@nestjs/common';

/**
 * Represents a IdentificationType repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class IdentificationTypeRepository {
  /**
   * Creates a new instance of IdentificationTypeRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: UtilitariaContext) {}

  /**
   * Retrieves all identificationTypes from the database.
   * @param options - Optional criteria to filter the identificationTypes.
   * @returns A promise that resolves to an array of identificationTypes.
   * @throws HttpException if there's an error retrieving the identificationTypes from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<IdentificationType>,
  ): Promise<IdentificationType[]> {
    try {
      return await this._context.identificationType.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a identificationType by the provided criteria in the database.
   * @param options - The criteria to find the identificationType.
   * @returns A promise that resolves to the found identificationType.
   * @throws HttpException if there's an error finding the identificationType in the database.
   */
  async findBy(
    options: GetOneCriteriaType<IdentificationType>,
  ): Promise<IdentificationType> {
    try {
      return await this._context.identificationType.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
