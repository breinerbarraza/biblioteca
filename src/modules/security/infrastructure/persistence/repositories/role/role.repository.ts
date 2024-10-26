import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/modules/database/types';
import { Role } from '@app/modules/security/domain/role/role.entity';
import { SecurityContext } from '@app/modules/security/infrastructure/persistence/context/securityContext.service';
import { Injectable, Scope, HttpException } from '@nestjs/common';

/**
 * Represents a Role repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class RoleRepository {
  /**
   * Creates a new instance of RoleRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: SecurityContext) {}

  /**
   * Retrieves all roles from the database.
   * @param options - Optional criteria to filter the roles.
   * @returns A promise that resolves to an array of roles.
   * @throws HttpException if there's an error retrieving the roles from the database.
   */
  async getAll(options?: GetAllCriteriaType<Role>): Promise<Role[]> {
    try {
      return await this._context.role.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new role in the database.
   * @param role - The role object to create.
   * @returns A promise that resolves to the created role.
   * @throws HttpException if there's an error creating the role in the database.
   */
  async create(role: Role): Promise<Role> {
    try {
      const roleData = await this._context.role.create(role);
      return { ...role, ...roleData?.raw[0], ...roleData?.generatedMaps[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a role by the provided criteria in the database.
   * @param options - The criteria to find the role.
   * @returns A promise that resolves to the found role.
   * @throws HttpException if there's an error finding the role in the database.
   */
  async findBy(options: GetOneCriteriaType<Role>): Promise<Role> {
    try {
      return await this._context.role.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a role in the database.
   * @param criteria - The criteria to find the role to update.
   * @param role - The updated role object.
   * @returns A promise that resolves to the updated role.
   * @throws HttpException if there's an error updating the role in the database.
   */
  async update(criteria: UpdateCriteriaType<Role>, role: Role): Promise<Role> {
    try {
      const updateRole = await this._context.role.update(criteria, role);
      return {
        ...role,
        ...updateRole?.raw[0],
        ...updateRole?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a role from the database.
   * @param criteria - The criteria to find the role to delete.
   * @returns A promise that resolves to the deleted role.
   * @throws HttpException if there's an error deleting the role from the database.
   */
  async delete(criteria: DeleteCriteriaType<Role>): Promise<Role> {
    try {
      const deleteRole = await this._context.role.delete(criteria);
      return { ...deleteRole?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a role in the database.
   * @param role - The role object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved role.
   * @throws HttpException if there's an error saving the role in the database.
   */
  async save(role: Role, options?: SaveOptionsType<Role>): Promise<Role> {
    try {
      const roleSaved = await this._context.role.save(role, options);
      return roleSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
