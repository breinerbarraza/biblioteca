import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/modules/database/types';
import { LoginAttempt } from '@app/modules/security/domain/loginAttempt/loginAttempt.entity';
import { SecurityContext } from '@app/modules/security/infrastructure/persistence/context/securityContext.service';
import { Injectable, Scope, HttpException } from '@nestjs/common';

/**
 * Represents a LoginAttempt repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class LoginAttemptRepository {
  /**
   * Creates a new instance of LoginAttemptRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: SecurityContext) {}

  /**
   * Retrieves all loginAttempts from the database.
   * @param options - Optional criteria to filter the loginAttempts.
   * @returns A promise that resolves to an array of loginAttempts.
   * @throws HttpException if there's an error retrieving the loginAttempts from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<LoginAttempt>,
  ): Promise<LoginAttempt[]> {
    try {
      return await this._context.loginAttempt.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new loginAttempt in the database.
   * @param loginAttempt - The loginAttempt object to create.
   * @returns A promise that resolves to the created loginAttempt.
   * @throws HttpException if there's an error creating the loginAttempt in the database.
   */
  async create(loginAttempt: LoginAttempt): Promise<LoginAttempt> {
    try {
      const loginAttemptData =
        await this._context.loginAttempt.create(loginAttempt);
      return {
        ...loginAttempt,
        ...loginAttemptData?.raw[0],
        ...loginAttemptData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a loginAttempt by the provided criteria in the database.
   * @param options - The criteria to find the loginAttempt.
   * @returns A promise that resolves to the found loginAttempt.
   * @throws HttpException if there's an error finding the loginAttempt in the database.
   */
  async findBy(
    options: GetOneCriteriaType<LoginAttempt>,
  ): Promise<LoginAttempt> {
    try {
      return await this._context.loginAttempt.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a loginAttempt in the database.
   * @param criteria - The criteria to find the loginAttempt to update.
   * @param loginAttempt - The updated loginAttempt object.
   * @returns A promise that resolves to the updated loginAttempt.
   * @throws HttpException if there's an error updating the loginAttempt in the database.
   */
  async update(
    criteria: UpdateCriteriaType<LoginAttempt>,
    loginAttempt: LoginAttempt,
  ): Promise<LoginAttempt> {
    try {
      const updateLoginAttempt = await this._context.loginAttempt.update(
        criteria,
        loginAttempt,
      );
      return {
        ...loginAttempt,
        ...updateLoginAttempt?.raw[0],
        ...updateLoginAttempt?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a loginAttempt from the database.
   * @param criteria - The criteria to find the loginAttempt to delete.
   * @returns A promise that resolves to the deleted loginAttempt.
   * @throws HttpException if there's an error deleting the loginAttempt from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<LoginAttempt>,
  ): Promise<LoginAttempt> {
    try {
      const deleteLoginAttempt =
        await this._context.loginAttempt.delete(criteria);
      return { ...deleteLoginAttempt?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a loginAttempt in the database.
   * @param loginAttempt - The loginAttempt object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved loginAttempt.
   * @throws HttpException if there's an error saving the loginAttempt in the database.
   */
  async save(
    loginAttempt: LoginAttempt,
    options?: SaveOptionsType<LoginAttempt>,
  ): Promise<LoginAttempt> {
    try {
      const loginAttemptSaved = await this._context.loginAttempt.save(
        loginAttempt,
        options,
      );
      return loginAttemptSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
