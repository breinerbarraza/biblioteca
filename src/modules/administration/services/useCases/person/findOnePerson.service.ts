import { PersonResponseDto } from '@app/modules/administration/domain/person/dto/person-response.dto';
import { Person } from '@app/modules/administration/domain/person/person.entity';
import { PersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/person/person.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a person by its ID.
 */
@Injectable()
export class FindOnePerson {
  /**
   * Constructs a new instance of the FindOnePersonService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _personRepository - The repository for accessing person data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _personRepository: PersonRepository,
  ) {}

  /**
   * Retrieves a person by its ID.
   *
   * @param id - The ID of the person to retrieve.
   * @returns A Promise that resolves to a PersonResponseDto object representing the retrieved person.
   */
  async handle(id: number): Promise<PersonResponseDto> {
    const person = await this._personRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(person, Person, PersonResponseDto);

    return response;
  }
}
