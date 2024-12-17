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
import { CreateContent } from '@app/modules/library/services/useCases/content/createContent.service';
import { FindAllContent } from '@app/modules/library/services/useCases/content/findAllContent.service';
import { FindOneContent } from '@app/modules/library/services/useCases/content/findOneContent.service';
import { UpdateContent } from '@app/modules/library/services/useCases/content/updateContent.service';
import { DeleteContent } from '@app/modules/library/services/useCases/content/deleteContent.service';
import { ContentRequestDto } from '@app/modules/library/domain/content/dto/content-request.dto';
import { ContentUpdateDto } from '@app/modules/library/domain/content/dto/content-update.dto';
  
  /**
   * Content controller
   */
  @Controller('contents')
  @ApiTags('Contents')
  export class ContentController {
    constructor(
      private readonly _createContent: CreateContent,
      private readonly _findAllContent: FindAllContent,
      private readonly _findOneContent: FindOneContent,
      private readonly _updateContent: UpdateContent,
      private readonly _deleteContent: DeleteContent,
    ) {}
  
    /**
     * Create a new content
     * @param createContentDto
     * @returns
     */
    @Post()
    @UseInterceptors(TransactionInterceptor)
    create(@Body() createContentDto: ContentRequestDto) {
      return this._createContent.handle(createContentDto);
    }
  
    /**
     * Get all contents
     * @returns
     */
    @Get()
    findAll() {
      return this._findAllContent.handle();
    }
    /**
     * Get todo by id
     * @param id
     * @returns
     */
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this._findOneContent.handle(+id);
    }
  
    /**
     * Update todo
     * @param id
     * @param updateContentDto
     * @returns
     */
    @Put(':id')
    @UseInterceptors(TransactionInterceptor)
    update(@Param('id') id: string, @Body() updateContentDto: ContentUpdateDto) {
      return this._updateContent.handle(+id, updateContentDto);
    }
  
    /**
     * Delete todo
     * @param id
     * @returns
     */
    @Delete(':id')
    @UseInterceptors(TransactionInterceptor)
    delete(@Param('id') id: string) {
      return this._deleteContent.handle(+id);
    }
  }
  