import { ModuleResponseDto } from '@app/modules/administration/domain/modulos/dto/modules-response.dto';
import { ModuleUpdateDto } from '@app/modules/administration/domain/modulos/dto/modules-update.dto';
import { Modules } from '@app/modules/administration/domain/modulos/modules.entity';
import { ModulesRepository } from '@app/modules/administration/infrastructure/persistence/repositories/modulos/modulo.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a modulo.
 */
@Injectable()
export class DeleteModulo {
  /**
   * Constructs a new instance of the DeleteModuloService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _moduloRepository - The repository for accessing modulo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _moduloRepository: ModulesRepository,
  ) {}

  /**
   * Handles the deletion of a modulo item.
   *
   * @param request - The request of the modulo item to be deleted.
   * @returns A promise that resolves to a ModuleResponseDto representing the deleted modulo item.
   */
  async handle(request: ModuleUpdateDto[]): Promise<ModuleResponseDto[]> {
    const moduloUpdate = this._mapper.mapArray(
      request,
      ModuleUpdateDto,
      Modules,
    );

    const response = this._mapper.mapArray(
      moduloUpdate,
      Modules,
      ModuleResponseDto,
    );

    return response;
  }
}
