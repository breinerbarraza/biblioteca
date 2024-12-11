import { SubModuleResponseDto } from '@app/modules/administration/domain/subModule/dto/subModule-response.dto';
import { SubModuleUpdateDto } from '@app/modules/administration/domain/subModule/dto/subModule-update.dto';
import { SubModule } from '@app/modules/administration/domain/subModule/subModule.entity';
import { SubModuleRepository } from '@app/modules/administration/infrastructure/persistence/repositories/subModule/subModule.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneSubModule } from './findOneSubModule.service';

/**
 * Service class for updating a subModule.
 */
@Injectable()
export class UpdateSubModule {
  /**
   * Constructs a new instance of the UpdateModuloService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _submoduleRepository - The repository for accessing subModule data.
   * @param _findOneSubModule - The use case for finding a single subModule.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _submoduleRepository: SubModuleRepository,
    private readonly _findOneSubModule: FindOneSubModule,
  ) {}

  /**
   * Handles the update of a subModule item.
   *
   * @param id - The ID of the subModule item to update.
   * @param subModuleUpdateDto - The data to update the subModule item with.
   * @returns The updated subModule item.
   * @throws NotFoundException if the subModule item with the specified ID is not found.
   */
  async handle(
    id: number,
    request: SubModuleUpdateDto,
  ): Promise<SubModuleResponseDto> {
    const exist = await this._findOneSubModule.handle(id);

    if (!exist?.id) {
      throw new NotFoundException('No existe ese sub-subModule.');
    }

    const subModuleUpdatePayload = this._mapper.map(
      request,
      SubModuleUpdateDto,
      SubModule,
    );

    const subModule = await this._submoduleRepository.update(
      id,
      subModuleUpdatePayload,
    );

    const response = this._mapper.map(
      subModule,
      SubModule,
      SubModuleResponseDto,
    );

    return response;
  }
}
