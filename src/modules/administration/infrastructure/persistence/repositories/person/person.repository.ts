import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from '@app/modules/database/types';
import { Person } from '@app/modules/administration/domain/person/person.entity';
import { AdministrationContext } from '@app/modules/administration/infrastructure/persistence/context/administrationContext.service';
import { Injectable, Scope, HttpException } from '@nestjs/common';

/**
 * Represents a Person repository.
 */
@Injectable({ scope: Scope.REQUEST })
export class PersonRepository {
  /**
   * Creates a new instance of PersonRepository.
   * @param _context - The context to interact with the database.
   */
  constructor(private readonly _context: AdministrationContext) {}

  /**
   * Retrieves all persons from the database.
   * @param options - Optional criteria to filter the persons.
   * @returns A promise that resolves to an array of persons.
   * @throws HttpException if there's an error retrieving the persons from the database.
   */
  async getAll(options?: GetAllCriteriaType<Person>): Promise<Person[]> {
    try {
      return await this._context.person.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Creates a new person in the database.
   * @param person - The person object to create.
   * @returns A promise that resolves to the created person.
   * @throws HttpException if there's an error creating the person in the database.
   */
  async create(person: Person): Promise<Person> {
    try {
      const userData = await this._context.person.create(person);
      return { ...person, ...userData?.raw[0], ...userData?.generatedMaps[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Find a person by the provided criteria in the database.
   * @param options - The criteria to find the person.
   * @returns A promise that resolves to the found person.
   * @throws HttpException if there's an error finding the person in the database.
   */
  async findBy(options: GetOneCriteriaType<Person>): Promise<Person> {
    try {
      return await this._context.person.getOne(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Updates a person in the database.
   * @param criteria - The criteria to find the person to update.
   * @param person - The updated person object.
   * @returns A promise that resolves to the updated person.
   * @throws HttpException if there's an error updating the person in the database.
   */
  async update(
    criteria: UpdateCriteriaType<Person>,
    person: Person,
  ): Promise<Person> {
    try {
      const Ppdateperson = await this._context.person.update(criteria, person);
      return {
        ...person,
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
   * Deletes a person from the database.
   * @param criteria - The criteria to find the person to delete.
   * @returns A promise that resolves to the deleted person.
   * @throws HttpException if there's an error deleting the person from the database.
   */
  async delete(criteria: DeleteCriteriaType<Person>): Promise<Person> {
    try {
      const Peleteperson = await this._context.person.delete(criteria);
      return { ...Peleteperson?.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }

  /**
   * Saves a person in the database.
   * @param person - The person object to save.
   * @param options - Optional save options.
   * @returns A promise that resolves to the saved person.
   * @throws HttpException if there's an error saving the person in the database.
   */
  async save(
    person: Person,
    options?: SaveOptionsType<Person>,
  ): Promise<Person> {
    try {
      const userSaved = await this._context.person.save(person, options);
      return userSaved;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error?.message}`,
        error?.status || 500,
      );
    }
  }
}
