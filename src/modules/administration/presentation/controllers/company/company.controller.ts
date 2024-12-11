import { CompanyRequestDto } from '@app/modules/administration/domain/company/dto/company-request.dto';
import { CompanyUpdateDto } from '@app/modules/administration/domain/company/dto/company-update.dto';
import { CreateCompany } from '@app/modules/administration/services/useCases/company/createCompany.service';
import { DeleteCompany } from '@app/modules/administration/services/useCases/company/deleteCompany.service';
import { FindAllCompany } from '@app/modules/administration/services/useCases/company/findAllCompany.service';
import { FindOneCompany } from '@app/modules/administration/services/useCases/company/findOneCompany.service';
import { UpdateCompany } from '@app/modules/administration/services/useCases/company/updateCompany.service';
import { TransactionInterceptor } from '@app/modules/common/interceptors/transaction.interceptor';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * Company controller
 */
@Controller('companies')
@ApiTags('Companies')
export class CompanyController {
  constructor(
    private readonly _createCompany: CreateCompany,
    private readonly _findAllCompany: FindAllCompany,
    private readonly _findOneCompany: FindOneCompany,
    private readonly _updateCompany: UpdateCompany,
    private readonly _deleteCompany: DeleteCompany,
  ) {}

  /**
   * Create a new company
   * @param createCompanyDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createCompanyDto: CompanyRequestDto) {
    return this._createCompany.handle(createCompanyDto);
  }

  /**
   * Get all companys
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllCompany.handle();
  }
  /**
   * Get todo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneCompany.handle(+id);
  }

  /**
   * Delete todo
   * @param id
   * @returns
   */
  @Put('delete')
  @UseInterceptors(TransactionInterceptor)
  delete(@Body() request: { id: number; state: number }) {
    return this._deleteCompany.handle(request?.id, request?.state);
  }

  /**
   * Update todo
   * @param id
   * @param updateCompanyDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(@Param('id') id: string, @Body() updateCompanyDto: CompanyUpdateDto) {
    return this._updateCompany.handle(+id, updateCompanyDto);
  }
}
