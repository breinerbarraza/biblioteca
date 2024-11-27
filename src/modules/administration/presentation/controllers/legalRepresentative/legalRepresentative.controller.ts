import { LegalRepresentativeRequestDto } from '@app/modules/administration/domain/legalReprensentative/dto/legalRepresentative-request.dto';
import { LegalRepresentativeUpdateDto } from '@app/modules/administration/domain/legalReprensentative/dto/legalRePresentative-update.dto';
import { CreateLegalRepresentative } from '@app/modules/administration/services/useCases/legalRepresentative/createLegalRepresentative.service';
import { DeleteLegalRepresentative } from '@app/modules/administration/services/useCases/legalRepresentative/deleteLegalRepresentatice.service';
import { FindAllLegalRepresentative } from '@app/modules/administration/services/useCases/legalRepresentative/findAllLegalRepresentative.service';
import { FindOneLegalRepresentative } from '@app/modules/administration/services/useCases/legalRepresentative/findOneLegalRepresentative.service';
import { UpdateLegalRepresentative } from '@app/modules/administration/services/useCases/legalRepresentative/updateLegalRepresentative.service';
import { TransactionInterceptor } from '@app/modules/common/interceptors/transaction.interceptor';
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

/**
 * Company controller
 */
@Controller('legalRepresentative')
@ApiTags('LegalRepresentative')
export class LegalRepresentativeController {
  constructor(
    private readonly _createLegalRepresentative: CreateLegalRepresentative,
    private readonly _findAllLegalRepresentative: FindAllLegalRepresentative,
    private readonly _findOneLegalRepresentative: FindOneLegalRepresentative,
    private readonly _updateLegalRepresentative: UpdateLegalRepresentative,
    private readonly _deleteLegalRepresentative: DeleteLegalRepresentative,
  ) {}

  /**
   * Create a new LegalRepresentative
   * @param createLegalRepresentativeDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createLegalRepresentativeDto: LegalRepresentativeRequestDto) {
    return this._createLegalRepresentative.handle(createLegalRepresentativeDto);
  }

  /**
   * Get all LegalRepresentative
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllLegalRepresentative.handle();
  }
  /**
   * Get todo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneLegalRepresentative.handle(+id);
  }

  /**
   * Update todo
   * @param id
   * @param updateCompanyDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(
    @Param('id') id: string,
    @Body() updateLegalRepresentativeDto: LegalRepresentativeUpdateDto,
  ) {
    return this._updateLegalRepresentative.handle(
      +id,
      updateLegalRepresentativeDto,
    );
  }

  /**
   * Delete todo
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deleteLegalRepresentative.handle(+id);
  }
}
