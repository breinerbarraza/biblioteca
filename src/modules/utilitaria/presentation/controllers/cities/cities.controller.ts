import { FindAllCities } from '@app/modules/utilitaria/services/useCases/cities/findAllCities.service';
import { FindOneCities } from '@app/modules/utilitaria/services/useCases/cities/findOneCities.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * Cities controller
 */
@Controller('cities')
@ApiTags('Cities')
export class CitiesController {
  constructor(
    private readonly _findAllCities: FindAllCities,
    private readonly _findOneCities: FindOneCities,
  ) {}

  /**
   * Get all cities
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllCities.handle();
  }

  /**
   * Get cities by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneCities.handle(+id);
  }
}
