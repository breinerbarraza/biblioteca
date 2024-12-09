import { StateResponseDto } from '@app/modules/utilitaria/domain/state/dto/state-response.dto';
import { State } from '@app/modules/utilitaria/domain/state/state.entity';
import { StateRepository } from '@app/modules/utilitaria/infrastructure/persistence/repositories/state/state.repository';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

/**
 * Service class for finding all states.
 */
@Injectable()
export class FindAllState {
  /**
   * Constructs a new instance of the `FindAllStateService` class.
   * @param _mapper - The mapper used for mapping data.
   * @param _stateRepository - The repository for accessing state data.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _stateRepository: StateRepository,
  ) {}

  /**
   * Handles the finding of all states.
   * @returns A promise that resolves to an array of StateResponseDto objects.
   */
  async handle(): Promise<StateResponseDto[]> {
    const states = await this._stateRepository.getAll();

    const response = this._mapper.mapArray(states, State, StateResponseDto);

    return response;
  }
}
