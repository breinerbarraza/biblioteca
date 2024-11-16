import { StateResponseDto } from '@app/modules/utilitaria/domain/state/dto/state-response.dto';
import { State } from '@app/modules/utilitaria/domain/state/state.entity';
import { StateRepository } from '@app/modules/utilitaria/infrastructure/persistence/repositories/state/state.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding a state by its ID.
 */
@Injectable()
export class FindOneState {
  /**
   * Constructs a new instance of the FindOneStateService class.
   * @param _mapper - The mapper used for mapping data.
   * @param _stateRepository - The repository for accessing state data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _stateRepository: StateRepository,
  ) {}

  /**
   * Retrieves a state by its ID.
   *
   * @param id - The ID of the state to retrieve.
   * @returns A Promise that resolves to a StateResponseDto object representing the retrieved state.
   */
  async handle(id: number): Promise<StateResponseDto> {
    const state = await this._stateRepository.findBy({
      where: { id },
    });

    const response = this._mapper.map(state, State, StateResponseDto);

    return response;
  }
}
