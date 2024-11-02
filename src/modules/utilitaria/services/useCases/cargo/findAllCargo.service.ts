import { CargoResponseDto } from '@app/modules/utilitaria/domain/cargo/dto/cargo-response.dto';
import { Cargo } from '@app/modules/utilitaria/domain/cargo/cargo.entity';
import { CargoRepository } from '@app/modules/utilitaria/infrastructure/persistence/repositories/cargo/cargo.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all cargos.
 */
@Injectable()
export class FindAllCargo {
  /**
   * Constructs a new instance of the `FindAllCargoService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _cargoRepository - The repository for accessing cargo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _cargoRepository: CargoRepository,
  ) {}

  /**
   * Handles the finding of all cargos.
   * @returns A promise that resolves to an array of CargoResponseDto objects.
   */
  async handle(): Promise<CargoResponseDto[]> {
    const cargos = await this._cargoRepository.getAll();

    const response = this._mapper.mapArray(cargos, Cargo, CargoResponseDto);

    return response;
  }
}
