import { SubModuleResponseDto } from '@app/modules/administration/domain/subModule/dto/subModule-response.dto';
import { SubModule } from '@app/modules/administration/domain/subModule/subModule.entity';
import { SubModuleRepository } from '@app/modules/administration/infrastructure/persistence/repositories/subModule/subModule.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all subModules.
 */
@Injectable()
export class FindAllSubModule {
  /**
   * Constructs a new instance of the `FindAllSubModuleService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _subModuleRepository - The repository for accessing sub-module data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _subModuleRepository: SubModuleRepository,
  ) {}

  /**
   * Handles the finding of all subModules.
   * @returns A promise that resolves to an array of SubModuleResponseDto objects.
   */
  async handle(): Promise<SubModuleResponseDto[]> {
    const subModules = await this._subModuleRepository.getAll({
      order: {
        id: 'ASC',
      },
    });

    const response = this._mapper.mapArray(
      subModules,
      SubModule,
      SubModuleResponseDto,
    );

    return response;
  }
}
