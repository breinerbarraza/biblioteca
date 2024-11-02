import { PersonResponseDto } from '@app/modules/administration/domain/person/dto/person-response.dto';
import { Person } from '@app/modules/administration/domain/person/person.entity';
import { PersonRepository } from '@app/modules/administration/infrastructure/persistence/repositories/person/person.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a person.
 */
@Injectable()
export class DeletePerson {
  /**
   * Constructs a new instance of the DeletePersonService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _personRepository - The repository for accessing person data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _personRepository: PersonRepository,
  ) {}

  /**
   * Handles the deletion of a person item.
   *
   * @param id - The ID of the person item to be deleted.
   * @returns A promise that resolves to a PersonResponseDto representing the deleted person item.
   */
  async handle(id: number): Promise<PersonResponseDto> {
    const person = await this._personRepository.delete({
      id,
    });

    const response = this._mapper.map(person, Person, PersonResponseDto);

    return response;
  }
}
