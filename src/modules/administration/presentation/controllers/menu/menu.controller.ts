import { MenuRequestDto } from '@app/modules/administration/domain/menu/dto/menu-request.dto';
import { MenuUpdateDto } from '@app/modules/administration/domain/menu/dto/menu-update.dto';
import { CreateMenu } from '@app/modules/administration/services/useCases/menu/createMenu.service';
import { DeleteMenu } from '@app/modules/administration/services/useCases/menu/deleteMenu.service';
import { FindAllMenu } from '@app/modules/administration/services/useCases/menu/findAllMenu.service';
import { FindOneMenu } from '@app/modules/administration/services/useCases/menu/findOneMenu.service';
import { UpdateMenu } from '@app/modules/administration/services/useCases/menu/updateMenu.service';
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
 * Menu controller
 */
@Controller('menu')
@ApiTags('Menu')
export class MenuController {
  constructor(
    private readonly _createMenu: CreateMenu,
    private readonly _updateMenu: UpdateMenu,
    private readonly _findAllMenu: FindAllMenu,
    private readonly _findOneMenu: FindOneMenu,
    private readonly _deleteMenu: DeleteMenu,
  ) {}

  /**
   * Get all menu
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllMenu.handle();
  }

  /**
   * Create a new Menu
   * @param createMenuDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createMenuDto: MenuRequestDto) {
    return this._createMenu.handle(createMenuDto);
  }

  /**
   * Get Menu by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneMenu.handle(+id);
  }

  /**
   * Update Menu
   * @param id
   * @param updateMenuDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(@Param('id') id: number, @Body() updateMenuDto: MenuUpdateDto) {
    return this._updateMenu.handle(id, updateMenuDto);
  }

  /**
   * Delete Menu
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deleteMenu.handle(Number(id));
  }
}
