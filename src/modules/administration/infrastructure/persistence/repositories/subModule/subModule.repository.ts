import {
  GetAllCriteriaType,
  GetOneCriteriaType,
  UpdateCriteriaType,
  DeleteCriteriaType,
  SaveOptionsType,
} from '@app/modules/database/types';
import { Injectable, Scope, HttpException } from '@nestjs/common';
import { AdministrationContext } from '../../context/administrationContext.service';
import { SubModule } from '@app/modules/administration/domain/subModule/subModule.entity';

/**
 * Represents a SubModule repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class SubModuleRepository {
  /**
   * Creates a new instance of SubModuleRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all subModules from the database.
   * @param options - Optional criteria to filter the subModules.
   * @returns A promise that resolves to an array of subModules.
   * @throws HttpException if there's an error retrieving the subModules from the database.
   */
  async getAll(options?: GetAllCriteriaType<SubModule>): Promise<SubModule[]> {
    try {
      return await this._context.subModule.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new subModule in the database.
   * @param subModule - The subModule object to create.
   * @returns A promise that resolves to the created subModule.
   * @throws HttpException if there's an error creating the subModule in the database.
   */
  async create(subModule: SubModule): Promise<SubModule> {
    try {
      const subModuleData = await this._context.subModule.create(subModule);
      return {
        ...subModule,
        ...subModuleData?.raw[0],
        ...subModuleData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a subModule by the provided criteria in the database.
   * @param options - The criteria to find the subModule.
   * @returns A promise that resolves to the found subModule.
   * @throws HttpException if there's an error finding the subModule in the database.
   */
  async findBy(options: GetOneCriteriaType<SubModule>): Promise<SubModule> {
    try {
      return await this._context.subModule.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a subModule in the database.
   * @param criteria - The criteria to find the subModule to update.
   * @param subModule - The updated subModule object.
   * @returns A promise that resolves to the updated subModule.
   * @throws HttpException if there's an error updating the subModule in the database.
   */
  async update(
    criteria: UpdateCriteriaType<SubModule>,
    subModule: SubModule,
  ): Promise<SubModule> {
    try {
      const updateSubModule = await this._context.subModule.update(
        criteria,
        subModule,
      );
      return {
        ...subModule,
        ...updateSubModule?.raw[0],
        ...updateSubModule?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a subModule from the database.
   * @param criteria - The criteria to find the subModule to delete.
   * @returns A promise that resolves to the deleted subModule.
   * @throws HttpException if there's an error deleting the subModule from the database.
   */
  async delete(criteria: DeleteCriteriaType<SubModule>): Promise<SubModule> {
    try {
      const deleteSubModule = await this._context.subModule.delete(criteria);
      return { ...deleteSubModule?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a subModule in the database.
   * @param subModule - The subModule object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved subModule.
   * @throws HttpException if there's an error saving the subModule in the database.
   */
  async save(
    subModule: SubModule,
    options?: SaveOptionsType<SubModule>,
  ): Promise<SubModule> {
    try {
      const userSaved = await this._context.subModule.save(subModule, options);
      return userSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
