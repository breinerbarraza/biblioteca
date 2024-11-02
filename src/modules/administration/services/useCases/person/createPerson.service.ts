import { PersonRequestDto } from '@app/modules/administration/domain/person/dto/person-request.dto';
import { PersonResponseDto } from '@app/modules/administration/domain/person/dto/person-response.dto';
import { Person } from '@app/modules/administration/domain/person/person.entity';
import { PersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/person/person.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new person.
 */
@Injectable()
export class CreatePerson {
  /**
   * Creates an instance of the CreatePersonService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _personRepository - The repository for managing Person entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _personRepository: PersonRepository,
  ) {}

  /**
   * Handles the creation of a new person.
   *
   * @param createPersonDto - The data transfer object containing the person details.
   * @returns The response containing the created person.
   */
  async handle(personRequestDto: PersonRequestDto): Promise<PersonResponseDto> {
    const personPayload = this._mapper.map(
      personRequestDto,
      PersonRequestDto,
      Person,
    );

    const person = await this._personRepository.create(personPayload);

    const response = this._mapper.map(person, Person, PersonResponseDto);

    return response;
  }
}
