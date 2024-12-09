import { Menu } from '@app/modules/administration/domain/menu/menu.entity';
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
 * Represents a Menu repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class MenuRepository {
  /**
   * Creates a new instance of MenuRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all menus from the database.
   * @param options - Optional criteria to filter the menus.
   * @returns A promise that resolves to an array of menus.
   * @throws HttpException if there's an error retrieving the menus from the database.
   */
  async getAll(options?: GetAllCriteriaType<Menu>): Promise<Menu[]> {
    try {
      return await this._context.menu.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new menu in the database.
   * @param menu - The menu object to create.
   * @returns A promise that resolves to the created menu.
   * @throws HttpException if there's an error creating the menu in the database.
   */
  async create(menu: Menu): Promise<Menu> {
    try {
      const menuData = await this._context.menu.create(menu);
      return {
        ...menu,
        ...menuData?.raw[0],
        ...menuData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a menu by the provided criteria in the database.
   * @param options - The criteria to find the menu.
   * @returns A promise that resolves to the found menu.
   * @throws HttpException if there's an error finding the menu in the database.
   */
  async findBy(options: GetOneCriteriaType<Menu>): Promise<Menu> {
    try {
      return await this._context.menu.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a menu in the database.
   * @param criteria - The criteria to find the menu to update.
   * @param menu - The updated menu object.
   * @returns A promise that resolves to the updated menu.
   * @throws HttpException if there's an error updating the menu in the database.
   */
  async update(criteria: UpdateCriteriaType<Menu>, menu: Menu): Promise<Menu> {
    try {
      const updateMenu = await this._context.menu.update(criteria, menu);
      return {
        ...menu,
        ...updateMenu?.raw[0],
        ...updateMenu?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a menu from the database.
   * @param criteria - The criteria to find the menu to delete.
   * @returns A promise that resolves to the deleted menu.
   * @throws HttpException if there's an error deleting the menu from the database.
   */
  async delete(criteria: DeleteCriteriaType<Menu>): Promise<Menu> {
    try {
      const deleteMenu = await this._context.menu.destroy(criteria);
      return { ...deleteMenu?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a menu in the database.
   * @param menu - The menu object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved menu.
   * @throws HttpException if there's an error saving the menu in the database.
   */
  async save(menu: Menu, options?: SaveOptionsType<Menu>): Promise<Menu> {
    try {
      const userSaved = await this._context.menu.save(menu, options);
      return userSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
