import { GenderResponseDto } from '@app/modules/utilitaria/domain/genders/dto/genders-response.dto';
import { Genders } from '@app/modules/utilitaria/domain/genders/genders.entity';
import { GendersRepository } from '@app/modules/utilitaria/infrastructure/persistence/repositories/genders/genders.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all genders.
 */
@Injectable()
export class FindAllGenders {
  /**
   * Constructs a new instance of the `FindAllGendersService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _gendersRepository - The repository for accessing cargo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _gendersRepository: GendersRepository,
  ) {}

  /**
   * Handles the finding of all genders.
   * @returns A promise that resolves to an array of GendersResponseDto objects.
   */
  async handle(): Promise<GenderResponseDto[]> {
    const genders = await this._gendersRepository.getAll();

    const response = this._mapper.mapArray(genders, Genders, GenderResponseDto);

    return response;
  }
}
