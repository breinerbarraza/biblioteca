import { ModuleResponseDto } from '@app/modules/administration/domain/modulos/dto/modules-response.dto';
import { Modules } from '@app/modules/administration/domain/modulos/modules.entity';
import { ModulesRepository } from '@app/modules/administration/infrastructure/persistence/repositories/modulos/modulo.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a modulo by its ID.
 */
@Injectable()
export class FindOneModulo {
  /**
   * Constructs a new instance of the FindOneModuloService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _moduloRepository - The repository for accessing modulo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _moduloRepository: ModulesRepository,
  ) {}

  /**
   * Retrieves a modulo by its ID.
   *
   * @param id - The ID of the modulo to retrieve.
   * @returns A Promise that resolves to a ModuloResponseDto object representing the retrieved modulo.
   */
  async handle(id: number): Promise<ModuleResponseDto> {
    const modulo = await this._moduloRepository.findBy({
      where: { id: id },
      relations: { subModules: true },
    });

    const response = this._mapper.map(modulo, Modules, ModuleResponseDto);

    return response;
  }
}
