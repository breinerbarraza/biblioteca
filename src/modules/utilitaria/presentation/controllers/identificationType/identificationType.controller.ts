import { FindAllIdentificationType } from '@app/modules/utilitaria/services/identificationType/findAllIdentificationType.service';
import { FindOneIdentificationType } from '@app/modules/utilitaria/services/identificationType/findOneIdentificationType.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * IdentificationType controller
 */
@Controller('identificationTypes')
@ApiTags('IdentificationTypes')
export class IdentificationTypeController {
  constructor(
    private readonly _findAllIdentificationType: FindAllIdentificationType,
    private readonly _findOneIdentificationType: FindOneIdentificationType,
  ) {}

  /**
   * Get all identificationType
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllIdentificationType.handle();
  }

  /**
   * Get identificationType by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneIdentificationType.handle(+id);
  }
}
