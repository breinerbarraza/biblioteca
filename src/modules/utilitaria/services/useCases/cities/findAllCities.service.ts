import { Cities } from '@app/modules/utilitaria/domain/cities/cities.entity';
import { citiesResponseDto } from '@app/modules/utilitaria/domain/cities/dto/cities-response.dto';
import { CitiesRepository } from '@app/modules/utilitaria/infrastructure/persistence/repositories/cities/cities.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all cities.
 */
@Injectable()
export class FindAllCities {
  /**
   * Constructs a new instance of the `FindAllCitiesService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _citiesRepository - The repository for accessing cargo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _citiesRepository: CitiesRepository,
  ) {}

  /**
   * Handles the finding of all cities.
   * @returns A promise that resolves to an array of CitiesResponseDto objects.
   */
  async handle(): Promise<citiesResponseDto[]> {
    const cities = await this._citiesRepository.getAll();

    const response = this._mapper.mapArray(cities, Cities, citiesResponseDto);

    return response;
  }
}
