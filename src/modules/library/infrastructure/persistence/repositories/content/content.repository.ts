import {
    DeleteCriteriaType,
    GetAllCriteriaType,
    GetOneCriteriaType,
    SaveOptionsType,
    UpdateCriteriaType,
} from '@app/modules/database/types';
import { Content } from '@app/modules/library/domain/content/content.entity';
import { HttpException, Injectable, Scope } from '@nestjs/common';
import { LibraryContext } from '../../context/libraryContext.service';

/**
 * Represents a Content repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class ContentRepository {
    /**
     * Creates a new instance of PersonRepository.
     * @param _context - The context to interact with the database.
     */
    constructor(private readonly _context: LibraryContext) { }

    /**
     * Retrieves all persons from the database.
     * @param options - Optional criteria to filter the persons.
     * @returns A promise that resolves to an array of persons.
     * @throws HttpException if there's an error retrieving the persons from the database.
     */
    async getAll(options?: GetAllCriteriaType<Content>): Promise<Content[]> {
        try {
            return await this._context.content.getAll(options);
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }

    /**
     * Creates a new content in the database.
     * @param content - The content object to create.
     * @returns A promise that resolves to the created content.
     * @throws HttpException if there's an error creating the content in the database.
     */
    async create(content: Content): Promise<Content> {
        try {
            const userData = await this._context.content.create(content);
            return { ...content, ...userData?.raw[0], ...userData?.generatedMaps[0] };
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }

    /**
     * Find a content by the provided criteria in the database.
     * @param options - The criteria to find the content.
     * @returns A promise that resolves to the found content.
     * @throws HttpException if there's an error finding the content in the database.
     */
    async findBy(options: GetOneCriteriaType<Content>): Promise<Content> {
        try {
            return await this._context.content.getOne(options);
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }

    /**
     * Updates a content in the database.
     * @param criteria - The criteria to find the content to update.
     * @param content - The updated content object.
     * @returns A promise that resolves to the updated content.
     * @throws HttpException if there's an error updating the content in the database.
     */
    async update(
        criteria: UpdateCriteriaType<Content>,
        content: Content,
    ): Promise<Content> {
        try {
            const Ppdateperson = await this._context.content.update(criteria, content);
            return {
                ...content,
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
     * Deletes a content from the database.
     * @param criteria - The criteria to find the content to delete.
     * @returns A promise that resolves to the deleted content.
     * @throws HttpException if there's an error deleting the content from the database.
     */
    async delete(criteria: DeleteCriteriaType<Content>): Promise<Content> {
        try {
            const Peleteperson = await this._context.content.delete(criteria);
            return { ...Peleteperson?.raw[0] };
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }

    /**
     * Saves a content in the database.
     * @param content - The content object to save.
     * @param options - Optional save options.
     * @returns A promise that resolves to the saved content.
     * @throws HttpException if there's an error saving the content in the database.
     */
    async save(
        content: Content,
        options?: SaveOptionsType<Content>,
    ): Promise<Content> {
        try {
            const userSaved = await this._context.content.save(content, options);
            return userSaved;
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }
}
