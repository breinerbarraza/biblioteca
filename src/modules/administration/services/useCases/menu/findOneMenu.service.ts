import { MenuResponseDto } from '@app/modules/administration/domain/menu/dto/menu-response.dto';
import { Menu } from '@app/modules/administration/domain/menu/menu.entity';
import { MenuRepository } from '@app/modules/administration/infrastructure/persistence/repositories/menu/menu.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a menu by its ID.
 */
@Injectable()
export class FindOneMenu {
  /**
   * Constructs a new instance of the FindOneMenu class.
   * @param _mapper - The mapper used for mapping data.
   * @param _menuRepository - The repository for accessing menu data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _menuRepository: MenuRepository,
  ) {}

  /**
   * Retrieves a menu by its ID.
   *
   * @param id - The ID of the menu to retrieve.
   * @returns A Promise that resolves to a MenuResponseDto object representing the retrieved menu.
   */
  async handle(id: number): Promise<MenuResponseDto> {
    const menu = await this._menuRepository.findBy({
      where: { id: id },
    });

    const response = this._mapper.map(menu, Menu, MenuResponseDto);

    return response;
  }
}
