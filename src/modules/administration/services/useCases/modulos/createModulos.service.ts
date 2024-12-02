import { ModuleRequestDto } from '@app/modules/administration/domain/modulos/dto/modules-request.dto';
import { ModuleResponseDto } from '@app/modules/administration/domain/modulos/dto/modules-response.dto';
import { Modules } from '@app/modules/administration/domain/modulos/modules.entity';
import { ModulesRepository } from '@app/modules/administration/infrastructure/persistence/repositories/modulos/modulo.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new modulo.
 */
@Injectable()
export class CreateModulo {
  /**
   * Creates an instance of the CreateModuloService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _moduloRepository - The repository for managing Modulo entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _moduloRepository: ModulesRepository,
  ) {}

  /**
   * Handles the creation of a new modulo.
   *
   * @param createModuloDto - The data transfer object containing the modulo details.
   * @returns The response containing the created modulo.
   */
  async handle(moduloRequestDto: ModuleRequestDto): Promise<ModuleResponseDto> {
    const moduloPayload = this._mapper.map(
      moduloRequestDto,
      ModuleRequestDto,
      Modules,
    );

    const modulo = await this._moduloRepository.create(moduloPayload);

    const response = this._mapper.map(modulo, Modules, ModuleResponseDto);

    return response;
  }
}
