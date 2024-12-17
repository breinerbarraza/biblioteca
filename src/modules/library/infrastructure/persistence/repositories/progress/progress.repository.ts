import {
    DeleteCriteriaType,
    GetAllCriteriaType,
    GetOneCriteriaType,
    SaveOptionsType,
    UpdateCriteriaType,
} from '@app/modules/database/types';
import { HttpException, Injectable, Scope } from '@nestjs/common';
import { LibraryContext } from '../../context/libraryContext.service';
import { Progress } from '@app/modules/library/domain/progress/progress.entity';

/**
 * Represents a Progress repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class ProgressRepository {
    /**
     * Creates a new instance of ProgressRepository.
     * @param _context - The context to interact with the database.
     */
    constructor(private readonly _context: LibraryContext) { }

    /**
     * Retrieves all progress from the database.
     * @param options - Optional criteria to filter the progress.
     * @returns A promise that resolves to an array of progress.
     * @throws HttpException if there's an error retrieving the progress from the database.
     */
    async getAll(options?: GetAllCriteriaType<Progress>): Promise<Progress[]> {
        try {
            return await this._context.progress.getAll(options);
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }

    /**
     * Creates a new progress in the database.
     * @param progress - The progress object to create.
     * @returns A promise that resolves to the created progress.
     * @throws HttpException if there's an error creating the progress in the database.
     */
    async create(progress: Progress): Promise<Progress> {
        try {
            const userData = await this._context.progress.create(progress);
            return { ...progress, ...userData?.raw[0], ...userData?.generatedMaps[0] };
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }

    /**
     * Find a progress by the provided criteria in the database.
     * @param options - The criteria to find the progress.
     * @returns A promise that resolves to the found progress.
     * @throws HttpException if there's an error finding the progress in the database.
     */
    async findBy(options: GetOneCriteriaType<Progress>): Promise<Progress> {
        try {
            return await this._context.progress.getOne(options);
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }

    /**
     * Updates a progress in the database.
     * @param criteria - The criteria to find the progress to update.
     * @param progress - The updated progress object.
     * @returns A promise that resolves to the updated progress.
     * @throws HttpException if there's an error updating the progress in the database.
     */
    async update(
        criteria: UpdateCriteriaType<Progress>,
        progress: Progress,
    ): Promise<Progress> {
        try {
            const Ppdateperson = await this._context.progress.update(criteria, progress);
            return {
                ...progress,
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
     * Deletes a progress from the database.
     * @param criteria - The criteria to find the progress to delete.
     * @returns A promise that resolves to the deleted progress.
     * @throws HttpException if there's an error deleting the progress from the database.
     */
    async delete(criteria: DeleteCriteriaType<Progress>): Promise<Progress> {
        try {
            const Peleteperson = await this._context.progress.delete(criteria);
            return { ...Peleteperson?.raw[0] };
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }

    /**
     * Saves a progress in the database.
     * @param progress - The progress object to save.
     * @param options - Optional save options.
     * @returns A promise that resolves to the saved progress.
     * @throws HttpException if there's an error saving the progress in the database.
     */
    async save(
        progress: Progress,
        options?: SaveOptionsType<Progress>,
    ): Promise<Progress> {
        try {
            const userSaved = await this._context.progress.save(progress, options);
            return userSaved;
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }
}
