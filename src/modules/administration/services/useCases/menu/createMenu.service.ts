import { MenuRequestDto } from '@app/modules/administration/domain/menu/dto/menu-request.dto';
import { MenuResponseDto } from '@app/modules/administration/domain/menu/dto/menu-response.dto';
import { Menu } from '@app/modules/administration/domain/menu/menu.entity';
import { MenuRepository } from '@app/modules/administration/infrastructure/persistence/repositories/menu/menu.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new menu.
 */
@Injectable()
export class CreateMenu {
  /**
   * Creates an instance of the CreateMenuService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _menuRepository - The repository for managing Menu entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _menuRepository: MenuRepository,
  ) {}

  /**
   * Handles the creation of a new menu.
   *
   * @param createMenuDto - The data transfer object containing the menu details.
   * @returns The response containing the created menu.
   */
  async handle(request: MenuRequestDto): Promise<MenuResponseDto> {
    const menuPayload = this._mapper.map(request, MenuRequestDto, Menu);

    const menu = await this._menuRepository.create(menuPayload);

    const response = this._mapper.map(menu, Menu, MenuResponseDto);

    return response;
  }
}
