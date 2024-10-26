import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/modules/database/types';
import { UserRole } from '@app/modules/security/domain/userRole/userRole.entity';
import { SecurityContext } from '@app/modules/security/infrastructure/persistence/context/securityContext.service';
import { Injectable, Scope, HttpException } from '@nestjs/common';

/**
 * Represents a UserRole repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class UserRoleRepository {
  /**
   * Creates a new instance of UserRoleRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: SecurityContext) {}

  /**
   * Retrieves all userRoles from the database.
   * @param options - Optional criteria to filter the userRoles.
   * @returns A promise that resolves to an array of userRoles.
   * @throws HttpException if there's an error retrieving the userRoles from the database.
   */
  async getAll(options?: GetAllCriteriaType<UserRole>): Promise<UserRole[]> {
    try {
      return await this._context.userRole.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new userRole in the database.
   * @param userRole - The userRole object to create.
   * @returns A promise that resolves to the created userRole.
   * @throws HttpException if there's an error creating the userRole in the database.
   */
  async create(userRole: UserRole): Promise<UserRole> {
    try {
      const userRoleData = await this._context.userRole.create(userRole);
      return {
        ...userRole,
        ...userRoleData?.raw[0],
        ...userRoleData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a userRole by the provided criteria in the database.
   * @param options - The criteria to find the userRole.
   * @returns A promise that resolves to the found userRole.
   * @throws HttpException if there's an error finding the userRole in the database.
   */
  async findBy(options: GetOneCriteriaType<UserRole>): Promise<UserRole> {
    try {
      return await this._context.userRole.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a userRole in the database.
   * @param criteria - The criteria to find the userRole to update.
   * @param userRole - The updated userRole object.
   * @returns A promise that resolves to the updated userRole.
   * @throws HttpException if there's an error updating the userRole in the database.
   */
  async update(
    criteria: UpdateCriteriaType<UserRole>,
    userRole: UserRole,
  ): Promise<UserRole> {
    try {
      const updateUserRole = await this._context.userRole.update(
        criteria,
        userRole,
      );
      return {
        ...userRole,
        ...updateUserRole?.raw[0],
        ...updateUserRole?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a userRole from the database.
   * @param criteria - The criteria to find the userRole to delete.
   * @returns A promise that resolves to the deleted userRole.
   * @throws HttpException if there's an error deleting the userRole from the database.
   */
  async delete(criteria: DeleteCriteriaType<UserRole>): Promise<UserRole> {
    try {
      const deleteUserRole = await this._context.userRole.delete(criteria);
      return { ...deleteUserRole?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a userRole in the database.
   * @param userRole - The userRole object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved userRole.
   * @throws HttpException if there's an error saving the userRole in the database.
   */
  async save(
    userRole: UserRole,
    options?: SaveOptionsType<UserRole>,
  ): Promise<UserRole> {
    try {
      const userRoleSaved = await this._context.userRole.save(
        userRole,
        options,
      );
      return userRoleSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
