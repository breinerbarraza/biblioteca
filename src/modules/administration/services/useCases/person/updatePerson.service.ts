import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PersonResponseDto } from '@app/modules/administration/domain/person/dto/person-response.dto';
import { Person } from '@app/modules/administration/domain/person/person.entity';
import { PersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/person/person.repository';
import { PersonUpdateDto } from '@app/modules/administration/domain/person/dto/person-update.dto';
import { FindOnePerson } from '@app/modules/administration/services/useCases/person/findOnePerson.service';

/**
 * Service class for updating a person.
 */
@Injectable()
export class UpdatePerson {
  /**
   * Constructs a new instance of the UpdatePersonService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _personRepository - The repository for accessing person data.
   * @param _findOnePerson - The use case for finding a single person.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _personRepository: PersonRepository,
    private readonly _findOnePerson: FindOnePerson,
  ) {}

  /**
   * Handles the update of a person item.
   *
   * @param id - The ID of the person item to update.
   * @param personUpdateDto - The data to update the person item with.
   * @returns The updated person item.
   * @throws NotFoundException if the person item with the specified ID is not found.
   */
  async handle(
    id: number,
    personUpdateDto: PersonUpdateDto,
  ): Promise<PersonResponseDto> {
    const exist = await this._findOnePerson.handle(id);

    if (!exist?.id) {
      throw new NotFoundException(`Person with id ${id} not found`);
    }

    const personUpdatePayload = this._mapper.map(
      personUpdateDto,
      PersonUpdateDto,
      Person,
    );

    const person = await this._personRepository.update(id, personUpdatePayload);

    const response = this._mapper.map(person, Person, PersonResponseDto);

    return response;
  }
}
