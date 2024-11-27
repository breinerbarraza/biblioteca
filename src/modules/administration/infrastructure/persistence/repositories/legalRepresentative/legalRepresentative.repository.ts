import { LegalRepresentative } from '@app/modules/administration/domain/legalReprensentative/legalRepresentative.entity';
import { AdministrationContext } from '@app/modules/administration/infrastructure/persistence/context/administrationContext.service';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/modules/database/types';
import { HttpException, Injectable, Scope } from '@nestjs/common';

/**
 * Represents a LegalRepresentative repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class LegalRepresentativeRepository {
  /**
   * Creates a new instance of LegalRepresentativeRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all legalRepresentative from the database.
   * @param options - Optional criteria to filter the legalRepresentative.
   * @returns A promise that resolves to an array of legalRepresentative.
   * @throws HttpException if there's an error retrieving the legalRepresentative from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<LegalRepresentative>,
  ): Promise<LegalRepresentative[]> {
    try {
      return await this._context.legalRepresentative.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new legalRepresentative in the database.
   * @param legalRepresentative - The legalRepresentative object to create.
   * @returns A promise that resolves to the created legalRepresentative.
   * @throws HttpException if there's an error creating the legalRepresentative in the database.
   */
  async create(
    legalReprensentative: LegalRepresentative,
  ): Promise<LegalRepresentative> {
    try {
      const legalData =
        await this._context.legalRepresentative.create(legalReprensentative);
      return {
        ...legalReprensentative,
        ...legalData?.raw[0],
        ...legalData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a legalReprensentative by the provided criteria in the database.
   * @param options - The criteria to find the legalReprensentative.
   * @returns A promise that resolves to the found legalReprensentative.
   * @throws HttpException if there's an error finding the legalReprensentative in the database.
   */
  async findBy(
    options: GetOneCriteriaType<LegalRepresentative>,
  ): Promise<LegalRepresentative> {
    try {
      return await this._context.legalRepresentative.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a legalRepresentative in the database.
   * @param criteria - The criteria to find the legalRepresentative to update.
   * @param legalRepresentative - The updated legalRepresentative object.
   * @returns A promise that resolves to the updated legalRepresentative.
   * @throws HttpException if there's an error updating the legalRepresentative in the database.
   */
  async update(
    criteria: UpdateCriteriaType<LegalRepresentative>,
    legalReprensentatives: LegalRepresentative,
  ): Promise<LegalRepresentative> {
    try {
      const UpdateLegalRp = await this._context.legalRepresentative.update(
        criteria,
        legalReprensentatives,
      );
      return {
        ...legalReprensentatives,
        ...UpdateLegalRp?.raw[0],
        ...UpdateLegalRp?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a legalReprensentative from the database.
   * @param criteria - The criteria to find the legalReprensentative to delete.
   * @returns A promise that resolves to the deleted legalReprensentative.
   * @throws HttpException if there's an error deleting the legalReprensentative from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<LegalRepresentative>,
  ): Promise<LegalRepresentative> {
    try {
      const DeleteLegalRepresentative =
        await this._context.legalRepresentative.delete(criteria);
      return { ...DeleteLegalRepresentative?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a legalReprensentative in the database.
   * @param legalReprensentative - The legalReprensentative object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved legalReprensentative.
   * @throws HttpException if there's an error saving the legalReprensentative in the database.
   */
  async save(
    legalDataRp: LegalRepresentative,
    options?: SaveOptionsType<LegalRepresentative>,
  ): Promise<LegalRepresentative> {
    try {
      const userSaved = await this._context.legalRepresentative.save(
        legalDataRp,
        options,
      );
      return userSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
