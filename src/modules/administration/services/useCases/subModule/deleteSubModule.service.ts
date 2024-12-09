import { SubModuleResponseDto } from '@app/modules/administration/domain/subModule/dto/subModule-response.dto';
import { SubModule } from '@app/modules/administration/domain/subModule/subModule.entity';
import { SubModuleRepository } from '@app/modules/administration/infrastructure/persistence/repositories/subModule/subModule.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for deleting a sub-module.
 */
@Injectable()
export class DeleteSubModule {
  /**
   * Constructs a new instance of the DeleteSubModuleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _subModuleRepository - The repository for accessing subModule data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _subModuleRepository: SubModuleRepository,
  ) {}

  /**
   * Handles the deletion of a subModule item.
   *
   * @param id - The ID of the subModule item to be deleted.
   * @returns A promise that resolves to a SubModuleResponseDto representing the deleted subModule item.
   */
  async handle(id: number): Promise<SubModuleResponseDto> {
    const subModule = await this._subModuleRepository.delete({
      id_sub_module: id,
    });

    const response = this._mapper.map(
      subModule,
      SubModule,
      SubModuleResponseDto,
    );

    return response;
  }
}
