import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/modules/database/types';
import { Company } from '@app/modules/administration/domain/company/company.entity';
import { AdministrationContext } from '@app/modules/administration/infrastructure/persistence/context/administrationContext.service';
import { Injectable, Scope, HttpException } from '@nestjs/common';

/**
 * Represents a Company repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class CompanyRepository {
  /**
   * Creates a new instance of CompanyRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all companies from the database.
   * @param options - Optional criteria to filter the companies.
   * @returns A promise that resolves to an array of companies.
   * @throws HttpException if there's an error retrieving the companies from the database.
   */
  async getAll(options?: GetAllCriteriaType<Company>): Promise<Company[]> {
    try {
      return await this._context.company.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new company in the database.
   * @param company - The company object to create.
   * @returns A promise that resolves to the created company.
   * @throws HttpException if there's an error creating the company in the database.
   */
  async create(company: Company): Promise<Company> {
    try {
      const userData = await this._context.company.create(company);
      return { ...company, ...userData?.raw[0], ...userData?.generatedMaps[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a company by the provided criteria in the database.
   * @param options - The criteria to find the company.
   * @returns A promise that resolves to the found company.
   * @throws HttpException if there's an error finding the company in the database.
   */
  async findBy(options: GetOneCriteriaType<Company>): Promise<Company> {
    try {
      return await this._context.company.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a company in the database.
   * @param criteria - The criteria to find the company to update.
   * @param company - The updated company object.
   * @returns A promise that resolves to the updated company.
   * @throws HttpException if there's an error updating the company in the database.
   */
  async update(
    criteria: UpdateCriteriaType<Company>,
    company: Company,
  ): Promise<Company> {
    try {
      const Ppdatecompany = await this._context.company.update(
        criteria,
        company,
      );
      return {
        ...company,
        ...Ppdatecompany?.raw[0],
        ...Ppdatecompany?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a company from the database.
   * @param criteria - The criteria to find the company to delete.
   * @returns A promise that resolves to the deleted company.
   * @throws HttpException if there's an error deleting the company from the database.
   */
  async delete(criteria: DeleteCriteriaType<Company>): Promise<Company> {
    try {
      const Peletecompany = await this._context.company.delete(criteria);
      return { ...Peletecompany?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a company in the database.
   * @param company - The company object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved company.
   * @throws HttpException if there's an error saving the company in the database.
   */
  async save(
    company: Company,
    options?: SaveOptionsType<Company>,
  ): Promise<Company> {
    try {
      const userSaved = await this._context.company.save(company, options);
      return userSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
