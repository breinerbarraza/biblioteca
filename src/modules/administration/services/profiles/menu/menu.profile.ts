/* istanbul ignore file */
import { MenuRequestDto } from '@app/modules/administration/domain/menu/dto/menu-request.dto';
import { MenuResponseDto } from '@app/modules/administration/domain/menu/dto/menu-response.dto';
import { MenuUpdateDto } from '@app/modules/administration/domain/menu/dto/menu-update.dto';
import { Menu } from '@app/modules/administration/domain/menu/menu.entity';
import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Menu profile
 */
@Injectable()
export class MenuProfile extends AutomapperProfile {
  /**
   * Constructor
   * @param mapper
   */
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, Menu, MenuResponseDto);
      createMap(mapper, MenuRequestDto, Menu);
      createMap(mapper, MenuUpdateDto, Menu);
      createMap(mapper, MenuUpdateDto, MenuRequestDto);
    };
  }
}
