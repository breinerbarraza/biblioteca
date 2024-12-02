import { SubModuleResponseDto } from '@app/modules/administration/domain/subModule/dto/subModule-response.dto';
import { SubModule } from '@app/modules/administration/domain/subModule/subModule.entity';
import { SubModuleRepository } from '@app/modules/administration/infrastructure/persistence/repositories/subModule/subModule.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a subModule by its ID.
 */
@Injectable()
export class FindOneSubModule {
  /**
   * Constructs a new instance of the FindOneSubModule class.
   * @param _mapper - The mapper used for mapping data.
   * @param _subModuleRepository - The repository for accessing subModule data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _subModuleRepository: SubModuleRepository,
  ) {}

  /**
   * Retrieves a subModule by its ID.
   *
   * @param id - The ID of the subModule to retrieve.
   * @returns A Promise that resolves to a SubModuleResponseDto object representing the retrieved subModule.
   */
  async handle(id: number): Promise<SubModuleResponseDto> {
    const subModule = await this._subModuleRepository.findBy({
      where: { id: id },
    });

    const response = this._mapper.map(
      subModule,
      SubModule,
      SubModuleResponseDto,
    );

    return response;
  }
}
