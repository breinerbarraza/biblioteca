import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseInterceptors,
  } from '@nestjs/common';
  import { ApiTags } from '@nestjs/swagger';
  import { TransactionInterceptor } from '@app/modules/common/interceptors/transaction.interceptor';
import { CreateLogAccess } from '@app/modules/library/services/useCases/logAccess/createLogAccess.service';
import { FindAllLogAccess } from '@app/modules/library/services/useCases/logAccess/findAllLogAccess.service';
import { FindOneLogAccess } from '@app/modules/library/services/useCases/logAccess/findOneLogAccess.service';
import { UpdateLogAccess } from '@app/modules/library/services/useCases/logAccess/updateLogAccess.service';
import { DeleteLogAccess } from '@app/modules/library/services/useCases/logAccess/deleteLogAccess.service';
import { LogAccessRequestDto } from '@app/modules/library/domain/logAccess/dto/logAccess-request.dto';
import { LogAccessUpdateDto } from '@app/modules/library/domain/logAccess/dto/logAccess-update.dto';
  
  /**
   * LogAccess controller
   */
  @Controller('logAccess')
  @ApiTags('LogAccess')
  export class LogAccessController {
    constructor(
      private readonly _createLogAccess: CreateLogAccess,
      private readonly _findAllLogAccess: FindAllLogAccess,
      private readonly _findOneLogAccess: FindOneLogAccess,
      private readonly _updateLogAccess: UpdateLogAccess,
      private readonly _deleteLogAccess: DeleteLogAccess,
    ) {}
  
    /**
     * Create a new content
     * @param createLogAccessDto
     * @returns
     */
    @Post()
    @UseInterceptors(TransactionInterceptor)
    create(@Body() createLogAccessDto: LogAccessRequestDto) {
      return this._createLogAccess.handle(createLogAccessDto);
    }
  
    /**
     * Get all logAccess
     * @returns
     */
    @Get()
    findAll() {
      return this._findAllLogAccess.handle();
    }
    /**
     * Get todo by id
     * @param id
     * @returns
     */
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this._findOneLogAccess.handle(+id);
    }
  
    /**
     * Update todo
     * @param id
     * @param updateLogAccessDto
     * @returns
     */
    @Put(':id')
    @UseInterceptors(TransactionInterceptor)
    update(@Param('id') id: string, @Body() updateLogAccessDto: LogAccessUpdateDto) {
      return this._updateLogAccess.handle(+id, updateLogAccessDto);
    }
  
    /**
     * Delete todo
     * @param id
     * @returns
     */
    @Delete(':id')
    @UseInterceptors(TransactionInterceptor)
    delete(@Param('id') id: string) {
      return this._deleteLogAccess.handle(+id);
    }
  }
  