import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/modules/database/types';
import { CompanyPerson } from '@app/modules/administration/domain/companyPerson/companyPerson.entity';
import { AdministrationContext } from '@app/modules/administration/infrastructure/persistence/context/administrationContext.service';
import { Injectable, Scope, HttpException } from '@nestjs/common';

/**
 * Represents a CompanyPerson repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class CompanyPersonRepository {
  /**
   * Creates a new instance of CompanyPersonRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all companies from the database.
   * @param options - Optional criteria to filter the companies.
   * @returns A promise that resolves to an array of companies.
   * @throws HttpException if there's an error retrieving the companies from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<CompanyPerson>,
  ): Promise<CompanyPerson[]> {
    try {
      return await this._context.companyPerson.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new companyPerson in the database.
   * @param companyPerson - The companyPerson object to create.
   * @returns A promise that resolves to the created companyPerson.
   * @throws HttpException if there's an error creating the companyPerson in the database.
   */
  async create(companyPerson: CompanyPerson): Promise<CompanyPerson> {
    try {
      const userData = await this._context.companyPerson.create(companyPerson);
      return {
        ...companyPerson,
        ...userData?.raw[0],
        ...userData?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a companyPerson by the provided criteria in the database.
   * @param options - The criteria to find the companyPerson.
   * @returns A promise that resolves to the found companyPerson.
   * @throws HttpException if there's an error finding the companyPerson in the database.
   */
  async findBy(
    options: GetOneCriteriaType<CompanyPerson>,
  ): Promise<CompanyPerson> {
    try {
      return await this._context.companyPerson.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a companyPerson in the database.
   * @param criteria - The criteria to find the companyPerson to update.
   * @param companyPerson - The updated companyPerson object.
   * @returns A promise that resolves to the updated companyPerson.
   * @throws HttpException if there's an error updating the companyPerson in the database.
   */
  async update(
    criteria: UpdateCriteriaType<CompanyPerson>,
    companyPerson: CompanyPerson,
  ): Promise<CompanyPerson> {
    try {
      const PpdatecompanyPerson = await this._context.companyPerson.update(
        criteria,
        companyPerson,
      );
      return {
        ...companyPerson,
        ...PpdatecompanyPerson?.raw[0],
        ...PpdatecompanyPerson?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a companyPerson from the database.
   * @param criteria - The criteria to find the companyPerson to delete.
   * @returns A promise that resolves to the deleted companyPerson.
   * @throws HttpException if there's an error deleting the companyPerson from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<CompanyPerson>,
  ): Promise<CompanyPerson> {
    try {
      const PeletecompanyPerson =
        await this._context.companyPerson.delete(criteria);
      return { ...PeletecompanyPerson?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a companyPerson in the database.
   * @param companyPerson - The companyPerson object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved companyPerson.
   * @throws HttpException if there's an error saving the companyPerson in the database.
   */
  async save(
    companyPerson: CompanyPerson,
    options?: SaveOptionsType<CompanyPerson>,
  ): Promise<CompanyPerson> {
    try {
      const userSaved = await this._context.companyPerson.save(
        companyPerson,
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
