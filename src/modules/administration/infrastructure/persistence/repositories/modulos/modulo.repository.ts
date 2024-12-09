import { Modules } from '@app/modules/administration/domain/modulos/modules.entity';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/modules/database/types';
import { HttpException, Injectable, Scope } from '@nestjs/common';
import { AdministrationContext } from '../../context/administrationContext.service';

/**
 * Represents a Modules repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class ModulesRepository {
  /**
   * Creates a new instance of ModulesRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all modulos from the database.
   * @param options - Optional criteria to filter the modulos.
   * @returns A promise that resolves to an array of modulos.
   * @throws HttpException if there's an error retrieving the modulos from the database.
   */
  async getAll(options?: GetAllCriteriaType<Modules>): Promise<Modules[]> {
    try {
      return await this._context.modulo.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new modulo in the database.
   * @param modulo - The modulo object to create.
   * @returns A promise that resolves to the created modulo.
   * @throws HttpException if there's an error creating the modulo in the database.
   */
  async create(modulo: Modules): Promise<Modules> {
    try {
      const moduloData = await this._context.modulo.create(modulo);
      return {
        ...modulo,
        ...moduloData?.raw[0],
        ...moduloData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a modulo by the provided criteria in the database.
   * @param options - The criteria to find the modulo.
   * @returns A promise that resolves to the found modulo.
   * @throws HttpException if there's an error finding the modulo in the database.
   */
  async findBy(options: GetOneCriteriaType<Modules>): Promise<Modules> {
    try {
      return await this._context.modulo.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a modulo in the database.
   * @param criteria - The criteria to find the modulo to update.
   * @param modulo - The updated modulo object.
   * @returns A promise that resolves to the updated modulo.
   * @throws HttpException if there's an error updating the modulo in the database.
   */
  async update(
    criteria: UpdateCriteriaType<Modules>,
    modulo: Modules,
  ): Promise<Modules> {
    try {
      const updateModulos = await this._context.modulo.update(criteria, modulo);
      return {
        ...modulo,
        ...updateModulos?.raw[0],
        ...updateModulos?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a modulo from the database.
   * @param criteria - The criteria to find the modulo to delete.
   * @returns A promise that resolves to the deleted modulo.
   * @throws HttpException if there's an error deleting the modulo from the database.
   */
  async delete(criteria: DeleteCriteriaType<Modules>): Promise<Modules> {
    try {
      const deleteModulos = await this._context.modulo.delete(criteria);
      return { ...deleteModulos?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a modulo in the database.
   * @param modulo - The modulo object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved modulo.
   * @throws HttpException if there's an error saving the modulo in the database.
   */
  async save(
    modulo: Modules,
    options?: SaveOptionsType<Modules>,
  ): Promise<Modules> {
    try {
      const userSaved = await this._context.modulo.save(modulo, options);
      return userSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
