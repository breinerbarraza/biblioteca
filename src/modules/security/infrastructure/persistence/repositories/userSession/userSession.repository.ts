import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/modules/database/types';
import { UserSession } from '@app/modules/security/domain/userSession/userSession.entity';
import { SecurityContext } from '@app/modules/security/infrastructure/persistence/context/securityContext.service';
import { Injectable, Scope, HttpException } from '@nestjs/common';

/**
 * Represents a UserSession repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class UserSessionRepository {
  /**
   * Creates a new instance of UserSessionRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: SecurityContext) {}

  /**
   * Retrieves all userSessions from the database.
   * @param options - Optional criteria to filter the userSessions.
   * @returns A promise that resolves to an array of userSessions.
   * @throws HttpException if there's an error retrieving the userSessions from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<UserSession>,
  ): Promise<UserSession[]> {
    try {
      return await this._context.userSession.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new userSession in the database.
   * @param userSession - The userSession object to create.
   * @returns A promise that resolves to the created userSession.
   * @throws HttpException if there's an error creating the userSession in the database.
   */
  async create(userSession: UserSession): Promise<UserSession> {
    try {
      const userSessionData =
        await this._context.userSession.create(userSession);
      return {
        ...userSession,
        ...userSessionData?.raw[0],
        ...userSessionData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a userSession by the provided criteria in the database.
   * @param options - The criteria to find the userSession.
   * @returns A promise that resolves to the found userSession.
   * @throws HttpException if there's an error finding the userSession in the database.
   */
  async findBy(options: GetOneCriteriaType<UserSession>): Promise<UserSession> {
    try {
      return await this._context.userSession.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a userSession in the database.
   * @param criteria - The criteria to find the userSession to update.
   * @param userSession - The updated userSession object.
   * @returns A promise that resolves to the updated userSession.
   * @throws HttpException if there's an error updating the userSession in the database.
   */
  async update(
    criteria: UpdateCriteriaType<UserSession>,
    userSession: UserSession,
  ): Promise<UserSession> {
    try {
      const updateUserSession = await this._context.userSession.update(
        criteria,
        userSession,
      );
      return {
        ...userSession,
        ...updateUserSession?.raw[0],
        ...updateUserSession?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a userSession from the database.
   * @param criteria - The criteria to find the userSession to delete.
   * @returns A promise that resolves to the deleted userSession.
   * @throws HttpException if there's an error deleting the userSession from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<UserSession>,
  ): Promise<UserSession> {
    try {
      const deleteUserSession =
        await this._context.userSession.delete(criteria);
      return { ...deleteUserSession?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a userSession in the database.
   * @param userSession - The userSession object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved userSession.
   * @throws HttpException if there's an error saving the userSession in the database.
   */
  async save(
    userSession: UserSession,
    options?: SaveOptionsType<UserSession>,
  ): Promise<UserSession> {
    try {
      const userSessionSaved = await this._context.userSession.save(
        userSession,
        options,
      );
      return userSessionSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
