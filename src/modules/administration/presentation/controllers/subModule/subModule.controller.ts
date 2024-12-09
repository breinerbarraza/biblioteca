import { SubModuleRequestDto } from '@app/modules/administration/domain/subModule/dto/subModule-request.dto';
import { SubModuleUpdateDto } from '@app/modules/administration/domain/subModule/dto/subModule-update.dto';
import { CreateSubModule } from '@app/modules/administration/services/useCases/subModule/createSubModule.service';
import { DeleteSubModule } from '@app/modules/administration/services/useCases/subModule/deleteSubModule.service';
import { FindAllSubModule } from '@app/modules/administration/services/useCases/subModule/findAllSubModule.service';
import { FindOneSubModule } from '@app/modules/administration/services/useCases/subModule/findOneSubModule.service';
import { UpdateSubModule } from '@app/modules/administration/services/useCases/subModule/updateSubModule.service';
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
 * SubModule controller
 */
@Controller('subModules')
@ApiTags('SubModules')
export class SubModuleController {
  constructor(
    private readonly _createSubModule: CreateSubModule,
    private readonly _updateSubModule: UpdateSubModule,
    private readonly _findAllSubModule: FindAllSubModule,
    private readonly _findOneSubModule: FindOneSubModule,
    private readonly _deleteSubModule: DeleteSubModule,
  ) {}

  /**
   * Create a new subModule
   * @param createSubModuleDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createSubModuleDto: SubModuleRequestDto) {
    return this._createSubModule.handle(createSubModuleDto);
  }

  /**
   * Get all subModules
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllSubModule.handle();
  }

  /**
   * Get subModule by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneSubModule.handle(+id);
  }

  /**
   * Update subModule
   * @param id
   * @param updateSubModuleDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(
    @Param('id') id: string,
    @Body() updateSubModuleDto: SubModuleUpdateDto,
  ) {
    return this._updateSubModule.handle(+id, updateSubModuleDto);
  }

  /**
   * Delete subModule
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: number) {
    return this._deleteSubModule.handle(id);
  }
}
