import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { GenderResponseDto } from '@app/modules/utilitaria/domain/genders/dto/genders-response.dto';
import { Genders } from '@app/modules/utilitaria/domain/genders/genders.entity';
import { GendersRepository } from '@app/modules/utilitaria/infrastructure/persistence/repositories/genders/genders.repository';

/**
 * Service class for finding a genders by its ID.
 */
@Injectable()
export class FindOneGender {
  /**
   * Constructs a new instance of the FindOneGendersService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _genderRepository - The repository for accessing genders data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _genderRepository: GendersRepository,
  ) {}

  /**
   * Retrieves a genders by its ID.
   *
   * @param id - The ID of the genders to retrieve.
   * @returns A Promise that resolves to a GendersResponseDto object representing the retrieved genders.
   */
  async handle(id: number): Promise<GenderResponseDto> {
    const genders = await this._genderRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(genders, Genders, GenderResponseDto);

    return response;
  }
}
