import { MenuResponseDto } from '@app/modules/administration/domain/menu/dto/menu-response.dto';
import { MenuUpdateDto } from '@app/modules/administration/domain/menu/dto/menu-update.dto';
import { Menu } from '@app/modules/administration/domain/menu/menu.entity';
import { MenuRepository } from '@app/modules/administration/infrastructure/persistence/repositories/menu/menu.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for updating a menu.
 */
@Injectable()
export class UpdateMenu {
  /**
   * Constructs a new instance of the UpdateModuloService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _menuRepository - The repository for accessing menu data.
   * @param _findOneMenu - The use case for finding a single menu.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _menuRepository: MenuRepository,
  ) {}

  /**
   * Handles the update of a menu item.
   *
   * @param id - The ID of the menu item to update.
   * @param menuUpdateDto - The data to update the menu item with.
   * @returns The updated menu item.
   * @throws NotFoundException if the menu item with the specified ID is not found.
   */
  async handle(id: number, request: MenuUpdateDto): Promise<MenuResponseDto> {
    const menuUpdatePayload = this._mapper.map(request, MenuUpdateDto, Menu);

    const menu = await this._menuRepository.update(id, menuUpdatePayload);

    const response = this._mapper.map(menu, Menu, MenuResponseDto);

    return response;
  }
}
