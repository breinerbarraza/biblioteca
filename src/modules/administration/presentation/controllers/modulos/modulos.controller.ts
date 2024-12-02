import { ModuleRequestDto } from '@app/modules/administration/domain/modulos/dto/modules-request.dto';
import { ModuleUpdateDto } from '@app/modules/administration/domain/modulos/dto/modules-update.dto';
import { CreateModulo } from '@app/modules/administration/services/useCases/modulos/createModulos.service';
import { DeleteModulo } from '@app/modules/administration/services/useCases/modulos/deleteModulos.service';
import { FindAllModule } from '@app/modules/administration/services/useCases/modulos/findAllModulos.service';
import { FindOneModulo } from '@app/modules/administration/services/useCases/modulos/findOneModulos.service';
import { UpdateModulo } from '@app/modules/administration/services/useCases/modulos/updateMenu.service';
import { AuthGuard } from '@app/modules/common/guards/authGuard.guard';
import { TransactionInterceptor } from '@app/modules/common/interceptors/transaction.interceptor';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

/**
 * Modulo controller
 */
@Controller('modulos')
@ApiTags('Modulos')
export class ModuloController {
  constructor(
    private readonly _createModulo: CreateModulo,
    private readonly _updateModulo: UpdateModulo,
    private readonly _findAllModule: FindAllModule,
    private readonly _findOneModulo: FindOneModulo,
    private readonly _deleteModulo: DeleteModulo,
  ) {}

  /**
   * Create a new modulo
   * @param createModuloDto
   * @returns
   */
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createModuloDto: ModuleRequestDto) {
    return this._createModulo.handle(createModuloDto);
  }

  /**
   * Get all modulos
   * @returns
   */
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get()
  gatAll() {
    return this._findAllModule.handle();
  }

  /**
   * Get modulo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneModulo.handle(+id);
  }

  /**
   * Delete modulo
   * @param id
   * @returns
   */
  @Put('delete')
  @UseInterceptors(TransactionInterceptor)
  delete(@Body() request: ModuleUpdateDto[]) {
    return this._deleteModulo.handle(request);
  }

  /**
   * Update modulo
   * @param id
   * @param updateModuloDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(@Param('id') id: number, @Body() updateModuloDto: ModuleUpdateDto) {
    return this._updateModulo.handle(id, updateModuloDto);
  }
}
