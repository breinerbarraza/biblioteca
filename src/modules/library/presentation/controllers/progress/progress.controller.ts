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
import { CreateProgress } from '@app/modules/library/services/useCases/progress/createProgress.service';
import { FindAllProgress } from '@app/modules/library/services/useCases/progress/findAllProgress.service';
import { FindOneProgress } from '@app/modules/library/services/useCases/progress/findOneProgress.service';
import { UpdateProgress } from '@app/modules/library/services/useCases/progress/updateProgress.service';
import { DeleteProgress } from '@app/modules/library/services/useCases/progress/deleteProgress.service';
import { ProgressRequestDto } from '@app/modules/library/domain/progress/dto/progress-request.dto';
import { ProgressUpdateDto } from '@app/modules/library/domain/progress/dto/progress-update.dto';
  
  /**
   * Progress controller
   */
  @Controller('progress')
  @ApiTags('Progress')
  export class ProgressController {
    constructor(
      private readonly _createProgress: CreateProgress,
      private readonly _findAllProgress: FindAllProgress,
      private readonly _findOneProgress: FindOneProgress,
      private readonly _updateProgress: UpdateProgress,
      private readonly _deleteProgress: DeleteProgress,
    ) {}
  
    /**
     * Create a new content
     * @param createProgressDto
     * @returns
     */
    @Post()
    @UseInterceptors(TransactionInterceptor)
    create(@Body() createProgressDto: ProgressRequestDto) {
      return this._createProgress.handle(createProgressDto);
    }
  
    /**
     * Get all progress
     * @returns
     */
    @Get()
    findAll() {
      return this._findAllProgress.handle();
    }
    /**
     * Get todo by id
     * @param id
     * @returns
     */
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this._findOneProgress.handle(+id);
    }
  
    /**
     * Update todo
     * @param id
     * @param updateProgressDto
     * @returns
     */
    @Put(':id')
    @UseInterceptors(TransactionInterceptor)
    update(@Param('id') id: string, @Body() updateProgressDto: ProgressUpdateDto) {
      return this._updateProgress.handle(+id, updateProgressDto);
    }
  
    /**
     * Delete todo
     * @param id
     * @returns
     */
    @Delete(':id')
    @UseInterceptors(TransactionInterceptor)
    delete(@Param('id') id: string) {
      return this._deleteProgress.handle(+id);
    }
  }
  