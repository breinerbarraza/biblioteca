import { FindAllState } from '@app/modules/utilitaria/services/useCases/state/findAllState.service';
import { FindOneState } from '@app/modules/utilitaria/services/useCases/state/findOneState.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * State controller
 */
@Controller('states')
@ApiTags('States')
export class StateController {
  constructor(
    private readonly _findAllState: FindAllState,
    private readonly _findOneState: FindOneState,
  ) {}

  /**
   * Get all state
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllState.handle();
  }

  /**
   * Get state by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneState.handle(+id);
  }
}
