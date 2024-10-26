import { FindAllCargo } from '@app/modules/utilitaria/services/cargo/findAllCargo.service';
import { FindOneCargo } from '@app/modules/utilitaria/services/cargo/findOneCargo.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * Cargo controller
 */
@Controller('cargos')
@ApiTags('Cargos')
export class CargoController {
  constructor(
    private readonly _findAllCargo: FindAllCargo,
    private readonly _findOneCargo: FindOneCargo,
  ) {}

  /**
   * Get all cargo
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllCargo.handle();
  }

  /**
   * Get cargo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneCargo.handle(+id);
  }
}
