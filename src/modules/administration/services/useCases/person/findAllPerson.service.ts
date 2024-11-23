import { PersonResponseDto } from '@app/modules/administration/domain/person/dto/person-response.dto';
import { Person } from '@app/modules/administration/domain/person/person.entity';
import { PersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/person/person.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all persons.
 */
@Injectable()
export class FindAllPerson {
  /**
   * Constructs a new instance of the `FindAllPersonService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _personRepository - The repository for accessing person data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _personRepository: PersonRepository,
  ) {}

  /**
   * Handles the finding of all persons.
   * @returns A promise that resolves to an array of PersonResponseDto objects.
   */
  async handle(): Promise<PersonResponseDto[]> {
    const persons = await this._personRepository.getAll({
      relations: { identificationType: true }
    });

    const response = this._mapper.mapArray(persons, Person, PersonResponseDto);

    return response;
  }
}
