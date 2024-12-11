/* istanbul ignore file */
import { ModuleRequestDto } from '@app/modules/administration/domain/modulos/dto/modules-request.dto';
import { ModuleResponseDto } from '@app/modules/administration/domain/modulos/dto/modules-response.dto';
import { ModuleUpdateDto } from '@app/modules/administration/domain/modulos/dto/modules-update.dto';
import { Modules } from '@app/modules/administration/domain/modulos/modules.entity';
import { createMap, forMember, mapFrom, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Modulo profile
 */
@Injectable()
export class ModuloProfile extends AutomapperProfile {
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
      createMap(
        mapper,
        Modules,
        ModuleResponseDto,
        forMember(
          (destination) => destination?.subModules,
          mapFrom((source) => source?.subModules),
        ),
      );
      createMap(mapper, ModuleRequestDto, Modules);
      createMap(mapper, ModuleUpdateDto, Modules);
    };
  }
}
