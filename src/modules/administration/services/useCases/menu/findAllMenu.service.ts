import { MenuResponseDto } from '@app/modules/administration/domain/menu/dto/menu-response.dto';
import { Menu } from '@app/modules/administration/domain/menu/menu.entity';
import { MenuRepository } from '@app/modules/administration/infrastructure/persistence/repositories/menu/menu.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all menus.
 */
@Injectable()
export class FindAllMenu {
  /**
   * Constructs a new instance of the `FindAllMenuService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _menuRepository - The repository for accessing sub-module data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _menuRepository: MenuRepository,
  ) {}

  /**
   * Handles the finding of all menus.
   * @returns A promise that resolves to an array of MenuResponseDto objects.
   */
  async handle(): Promise<MenuResponseDto[]> {
    const menus = await this._menuRepository.getAll({
      relations: {
        subModule: true,
      },
      order: {
        id: 'ASC',
      },
    });

    const response = this._mapper.mapArray(menus, Menu, MenuResponseDto);

    return response;
  }
}
