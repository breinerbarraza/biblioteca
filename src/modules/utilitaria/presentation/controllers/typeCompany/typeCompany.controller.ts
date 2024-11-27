import { FindAllTypeCompany } from '@app/modules/utilitaria/services/useCases/typeCompany/findAllTypeCompany.service';
import { FindOneTypeCompany } from '@app/modules/utilitaria/services/useCases/typeCompany/findOneTypeCompany.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * TypeCompany controller
 */
@Controller('typeCompanies')
@ApiTags('TypeCompanies')
export class TypeCompanyController {
  constructor(
    private readonly _findAllTypeCompany: FindAllTypeCompany,
    private readonly _findOneTypeCompany: FindOneTypeCompany,
  ) {}

  /**
   * Get all typeCompany
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllTypeCompany.handle();
  }

  /**
   * Get typeCompany by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneTypeCompany.handle(+id);
  }
}
