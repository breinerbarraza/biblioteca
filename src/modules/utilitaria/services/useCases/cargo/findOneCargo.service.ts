import { CargoResponseDto } from '@app/modules/utilitaria/domain/cargo/dto/cargo-response.dto';
import { Cargo } from '@app/modules/utilitaria/domain/cargo/cargo.entity';
import { CargoRepository } from '@app/modules/utilitaria/infrastructure/persistence/repositories/cargo/cargo.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a cargo by its ID.
 */
@Injectable()
export class FindOneCargo {
  /**
   * Constructs a new instance of the FindOneCargoService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _cargoRepository - The repository for accessing cargo data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _cargoRepository: CargoRepository,
  ) {}

  /**
   * Retrieves a cargo by its ID.
   *
   * @param id - The ID of the cargo to retrieve.
   * @returns A Promise that resolves to a CargoResponseDto object representing the retrieved cargo.
   */
  async handle(id: number): Promise<CargoResponseDto> {
    const cargo = await this._cargoRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(cargo, Cargo, CargoResponseDto);

    return response;
  }
}
