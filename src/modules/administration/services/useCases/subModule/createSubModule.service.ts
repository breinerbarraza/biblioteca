import { SubModuleRequestDto } from '@app/modules/administration/domain/subModule/dto/subModule-request.dto';
import { SubModuleResponseDto } from '@app/modules/administration/domain/subModule/dto/subModule-response.dto';
import { SubModule } from '@app/modules/administration/domain/subModule/subModule.entity';
import { SubModuleRepository } from '@app/modules/administration/infrastructure/persistence/repositories/subModule/subModule.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';

/**
 * Service class for creating a new subModule.
 */
@Injectable()
export class CreateSubModule {
  /**
   * Creates an instance of the CreateSubModuleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _subModuleRepository - The repository for managing SubModule entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _subModuleRepository: SubModuleRepository,
  ) {}

  /**
   * Handles the creation of a new subModule.
   *
   * @param createSubModuleDto - The data transfer object containing the subModule details.
   * @returns The response containing the created subModule.
   */
  async handle(request: SubModuleRequestDto): Promise<SubModuleResponseDto> {
    const subModulePayload = this._mapper.map(
      request,
      SubModuleRequestDto,
      SubModule,
    );

    const existModule = await this._subModuleRepository.findBy({
      where: { name: subModulePayload?.name },
    });

    if (existModule?.name)
      throw new NotFoundException('Ya existe un sub-módulo con ese nombre.');

    const subModule = await this._subModuleRepository.create(subModulePayload);

    const response = this._mapper.map(
      subModule,
      SubModule,
      SubModuleResponseDto,
    );

    return response;
  }
}
