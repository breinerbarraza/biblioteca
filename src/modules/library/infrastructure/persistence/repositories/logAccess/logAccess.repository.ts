import {
    DeleteCriteriaType,
    GetAllCriteriaType,
    GetOneCriteriaType,
    SaveOptionsType,
    UpdateCriteriaType,
} from '@app/modules/database/types';
import { HttpException, Injectable, Scope } from '@nestjs/common';
import { LibraryContext } from '../../context/libraryContext.service';
import { LogAccess } from '@app/modules/library/domain/logAccess/logAccess.entity';

/**
 * Represents a LogAccess repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class LogAccessRepository {
    /**
     * Creates a new instance of LogAccessRepository.
     * @param _context - The context to interact with the database.
     */
    constructor(private readonly _context: LibraryContext) { }

    /**
     * Retrieves all persons from the database.
     * @param options - Optional criteria to filter the persons.
     * @returns A promise that resolves to an array of persons.
     * @throws HttpException if there's an error retrieving the persons from the database.
     */
    async getAll(options?: GetAllCriteriaType<LogAccess>): Promise<LogAccess[]> {
        try {
            return await this._context.logAccess.getAll(options);
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }

    /**
     * Creates a new logAccess in the database.
     * @param logAccess - The logAccess object to create.
     * @returns A promise that resolves to the created logAccess.
     * @throws HttpException if there's an error creating the logAccess in the database.
     */
    async create(logAccess: LogAccess): Promise<LogAccess> {
        try {
            const userData = await this._context.logAccess.create(logAccess);
            return { ...logAccess, ...userData?.raw[0], ...userData?.generatedMaps[0] };
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }

    /**
     * Find a logAccess by the provided criteria in the database.
     * @param options - The criteria to find the logAccess.
     * @returns A promise that resolves to the found logAccess.
     * @throws HttpException if there's an error finding the logAccess in the database.
     */
    async findBy(options: GetOneCriteriaType<LogAccess>): Promise<LogAccess> {
        try {
            return await this._context.logAccess.getOne(options);
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }

    /**
     * Updates a logAccess in the database.
     * @param criteria - The criteria to find the logAccess to update.
     * @param logAccess - The updated logAccess object.
     * @returns A promise that resolves to the updated logAccess.
     * @throws HttpException if there's an error updating the logAccess in the database.
     */
    async update(
        criteria: UpdateCriteriaType<LogAccess>,
        logAccess: LogAccess,
    ): Promise<LogAccess> {
        try {
            const Ppdateperson = await this._context.logAccess.update(criteria, logAccess);
            return {
                ...logAccess,
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
     * Deletes a logAccess from the database.
     * @param criteria - The criteria to find the logAccess to delete.
     * @returns A promise that resolves to the deleted logAccess.
     * @throws HttpException if there's an error deleting the logAccess from the database.
     */
    async delete(criteria: DeleteCriteriaType<LogAccess>): Promise<LogAccess> {
        try {
            const Peleteperson = await this._context.logAccess.delete(criteria);
            return { ...Peleteperson?.raw[0] };
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }

    /**
     * Saves a logAccess in the database.
     * @param logAccess - The logAccess object to save.
     * @param options - Optional save options.
     * @returns A promise that resolves to the saved logAccess.
     * @throws HttpException if there's an error saving the logAccess in the database.
     */
    async save(
        logAccess: LogAccess,
        options?: SaveOptionsType<LogAccess>,
    ): Promise<LogAccess> {
        try {
            const userSaved = await this._context.logAccess.save(logAccess, options);
            return userSaved;
        } catch (error) {
            throw new HttpException(
                `Error de DB: ${error?.message}`,
                error?.status || 500,
            );
        }
    }
}
