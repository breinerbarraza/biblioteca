import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransactionInterceptor } from '@app/modules/common/interceptors/transaction.interceptor';
import { CompanyPersonRequestDto } from '@app/modules/administration/domain/companyPerson/dto/companyPerson-request.dto';
import { CompanyPersonUpdateDto } from '@app/modules/administration/domain/companyPerson/dto/companyPerson-update.dto';
import { CreateCompanyPerson } from '@app/modules/administration/services/useCases/companyPerson/createCompanyPerson.service';
import { FindAllCompanyPerson } from '@app/modules/administration/services/useCases/companyPerson/findAllCompanyPerson.service';
import { FindOneCompanyPerson } from '@app/modules/administration/services/useCases/companyPerson/findOneCompanyPerson.service';
import { UpdateCompanyPerson } from '@app/modules/administration/services/useCases/companyPerson/updateCompanyPerson.service';
import { DeleteCompanyPerson } from '@app/modules/administration/services/useCases/companyPerson/deleteCompanyPerson.service';

/**
 * CompanyPerson controller
 */
@Controller('companyPerson')
@ApiTags('CompanyPersons')
export class CompanyPersonController {
  constructor(
    private readonly _createCompanyPerson: CreateCompanyPerson,
    private readonly _findAllCompanyPerson: FindAllCompanyPerson,
    private readonly _findOneCompanyPerson: FindOneCompanyPerson,
    private readonly _updateCompanyPerson: UpdateCompanyPerson,
    private readonly _deleteCompanyPerson: DeleteCompanyPerson,
  ) {}

  /**
   * Create a new companyPerson
   * @param createCompanyPersonDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createCompanyPersonDto: CompanyPersonRequestDto) {
    return this._createCompanyPerson.handle(createCompanyPersonDto);
  }

  /**
   * Get all companyPersons
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllCompanyPerson.handle();
  }
  /**
   * Get todo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneCompanyPerson.handle(+id);
  }

  /**
   * Update todo
   * @param id
   * @param updateCompanyPersonDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(
    @Param('id') id: string,
    @Body() updateCompanyPersonDto: CompanyPersonUpdateDto,
  ) {
    return this._updateCompanyPerson.handle(+id, updateCompanyPersonDto);
  }

  /**
   * Delete todo
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deleteCompanyPerson.handle(+id);
  }
}
