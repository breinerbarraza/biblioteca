import { ModuleResponseDto } from '@app/modules/administration/domain/modulos/dto/modules-response.dto';
import { Modules } from '@app/modules/administration/domain/modulos/modules.entity';
import { ModulesRepository } from '@app/modules/administration/infrastructure/persistence/repositories/modulos/modulo.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all módulos.
 */
@Injectable()
export class FindAllModule {
  /**
   * Constructs a new instance of the `FindAllModule` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _moduloRepository - The repository for accessing modulo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _moduloRepository: ModulesRepository,
  ) {}

  /**
   * Handles the finding of all modulos.
   * @returns A promise that resolves to an array of ModuleResponseDto objects.
   */
  async handle(): Promise<ModuleResponseDto[]> {
    const modules = await this._moduloRepository.getAll({
      order: {
        id: 'ASC',
      },
    });

    const response = this._mapper.mapArray(modules, Modules, ModuleResponseDto);

    return response;
  }
}
