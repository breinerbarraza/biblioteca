import { FindAllGenders } from '@app/modules/utilitaria/services/useCases/genders/findAllGenders.service';
import { FindOneGender } from '@app/modules/utilitaria/services/useCases/genders/findOneGenders.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * Genders controller
 */
@Controller('genders')
@ApiTags('Genders')
export class GendersController {
  constructor(
    private readonly _findAllGenders: FindAllGenders,
    private readonly _findOneGenders: FindOneGender,
  ) {}

  /**
   * Get all genders
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllGenders.handle();
  }

  /**
   * Get genders by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneGenders.handle(+id);
  }
}
