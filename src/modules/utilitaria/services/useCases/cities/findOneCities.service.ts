import { Cities } from '@app/modules/utilitaria/domain/cities/cities.entity';
import { citiesResponseDto } from '@app/modules/utilitaria/domain/cities/dto/cities-response.dto';
import { CitiesRepository } from '@app/modules/utilitaria/infrastructure/persistence/repositories/cities/cities.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a cities by its ID.
 */
@Injectable()
export class FindOneCities {
  /**
   * Constructs a new instance of the FindOneCitiesService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _citiesRepository - The repository for accessing cities data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _citiesRepository: CitiesRepository,
  ) {}

  /**
   * Retrieves a cities by its ID.
   *
   * @param id - The ID of the cities to retrieve.
   * @returns A Promise that resolves to a CitiesResponseDto object representing the retrieved cities.
   */
  async handle(id: number): Promise<citiesResponseDto> {
    const cities = await this._citiesRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(cities, Cities, citiesResponseDto);

    return response;
  }
}
