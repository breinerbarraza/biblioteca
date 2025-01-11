import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/modules/database/types';
import { ContentDetail } from '@app/modules/library/domain/contentDetail/contentDetail.entity';
import { HttpException, Injectable, Scope } from '@nestjs/common';
import { LibraryContext } from '../../context/libraryContext.service';

/**
 * Represents a ContentDetail repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class ContentDetailRepository {
  /**
   * Creates a new instance of PersonRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: LibraryContext) {}

  /**
   * Retrieves all persons from the database.
   * @param options - Optional criteria to filter the persons.
   * @returns A promise that resolves to an array of persons.
   * @throws HttpException if there's an error retrieving the persons from the database.
   */
  async getAll(
    options?: GetAllCriteriaType<ContentDetail>,
  ): Promise<ContentDetail[]> {
    try {
      return await this._context.contentDetail.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new contentDetail in the database.
   * @param contentDetail - The contentDetail object to create.
   * @returns A promise that resolves to the created contentDetail.
   * @throws HttpException if there's an error creating the contentDetail in the database.
   */
  async create(contentDetail: ContentDetail): Promise<ContentDetail> {
    try {
      const userData = await this._context.contentDetail.create(contentDetail);
      return {
        ...contentDetail,
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
   * Find a contentDetail by the provided criteria in the database.
   * @param options - The criteria to find the contentDetail.
   * @returns A promise that resolves to the found contentDetail.
   * @throws HttpException if there's an error finding the contentDetail in the database.
   */
  async findBy(
    options: GetOneCriteriaType<ContentDetail>,
  ): Promise<ContentDetail> {
    try {
      return await this._context.contentDetail.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a contentDetail in the database.
   * @param criteria - The criteria to find the contentDetail to update.
   * @param contentDetail - The updated contentDetail object.
   * @returns A promise that resolves to the updated contentDetail.
   * @throws HttpException if there's an error updating the contentDetail in the database.
   */
  async update(
    criteria: UpdateCriteriaType<ContentDetail>,
    contentDetail: ContentDetail,
  ): Promise<ContentDetail> {
    try {
      const Ppdateperson = await this._context.contentDetail.update(
        criteria,
        contentDetail,
      );
      return {
        ...contentDetail,
        ...Ppdateperson?.raw[0],
        ...Ppdateperson?.generatedMaps[0],
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Deletes a contentDetail from the database.
   * @param criteria - The criteria to find the contentDetail to delete.
   * @returns A promise that resolves to the deleted contentDetail.
   * @throws HttpException if there's an error deleting the contentDetail from the database.
   */
  async delete(
    criteria: DeleteCriteriaType<ContentDetail>,
  ): Promise<ContentDetail> {
    try {
      const Peleteperson = await this._context.contentDetail.delete(criteria);
      return { ...Peleteperson?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a contentDetail in the database.
   * @param contentDetail - The contentDetail object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved contentDetail.
   * @throws HttpException if there's an error saving the contentDetail in the database.
   */
  async save(
    contentDetail: ContentDetail,
    options?: SaveOptionsType<ContentDetail>,
  ): Promise<ContentDetail> {
    try {
      const userSaved = await this._context.contentDetail.save(
        contentDetail,
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
