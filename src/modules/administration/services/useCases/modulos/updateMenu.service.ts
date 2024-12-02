import { ModuleResponseDto } from '@app/modules/administration/domain/modulos/dto/modules-response.dto';
import { ModuleUpdateDto } from '@app/modules/administration/domain/modulos/dto/modules-update.dto';
import { Modules } from '@app/modules/administration/domain/modulos/modules.entity';
import { ModulesRepository } from '@app/modules/administration/infrastructure/persistence/repositories/modulos/modulo.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';

/**
 * Service class for updating a modulo.
 */
@Injectable()
export class UpdateModulo {
  /**
   * Constructs a new instance of the UpdateModuloService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _moduloRepository - The repository for accessing modulo data.
   * @param _findOneModulo - The use case for finding a single modulo.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _moduloRepository: ModulesRepository,
  ) {}

  /**
   * Handles the update of a modulo item.
   *
   * @param id - The ID of the modulo item to update.
   * @param moduloUpdateDto - The data to update the modulo item with.
   * @returns The updated modulo item.
   * @throws NotFoundException if the modulo item with the specified ID is not found.
   */
  async handle(
    id: number,
    moduloUpdateDto: ModuleUpdateDto,
  ): Promise<ModuleResponseDto> {
    const existModule = await this._moduloRepository.getAll();

    if (!existModule?.some((x) => x?.id === Number(id))) {
      throw new NotFoundException(`No existe ese modulo.`);
    }

    const moduloUpdatePayload = this._mapper.map(
      moduloUpdateDto,
      ModuleUpdateDto,
      Modules,
    );

    const modulo = await this._moduloRepository.update(id, moduloUpdatePayload);

    const response = this._mapper.map(modulo, Modules, ModuleResponseDto);

    return response;
  }
}
