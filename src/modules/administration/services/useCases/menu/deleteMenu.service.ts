import { MenuResponseDto } from '@app/modules/administration/domain/menu/dto/menu-response.dto';
import { Menu } from '@app/modules/administration/domain/menu/menu.entity';
import { MenuRepository } from '@app/modules/administration/infrastructure/persistence/repositories/menu/menu.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a menu.
 */
@Injectable()
export class DeleteMenu {
  /**
   * Constructs a new instance of the DeleteMenuService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _menuRepository - The repository for accessing menu data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _menuRepository: MenuRepository,
  ) {}

  /**
   * Handles the deletion of a menu item.
   *
   * @param id - The ID of the menu item to be deleted.
   * @returns A promise that resolves to a MenuResponseDto representing the deleted menu item.
   */
  async handle(id: number): Promise<MenuResponseDto> {
    const menu = await this._menuRepository.delete({
      id: id,
    });

    const response = this._mapper.map(menu, Menu, MenuResponseDto);

    return response;
  }
}
