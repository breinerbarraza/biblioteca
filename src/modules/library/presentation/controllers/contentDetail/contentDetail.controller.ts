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
import { CreateContentDetail } from '@app/modules/library/services/useCases/contentDetail/createContentDetail.service';
import { FindAllContentDetail } from '@app/modules/library/services/useCases/contentDetail/findAllContentDetail.service';
import { FindOneContentDetail } from '@app/modules/library/services/useCases/contentDetail/findOneContentDetail.service';
import { UpdateContentDetail } from '@app/modules/library/services/useCases/contentDetail/updateContentDetail.service';
import { DeleteContentDetail } from '@app/modules/library/services/useCases/contentDetail/deleteContentDetail.service';
import { ContentDetailRequestDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-request.dto';
import { ContentDetailUpdateDto } from '@app/modules/library/domain/contentDetail/dto/contentDetail-update.dto';

/**
 * ContentDetail controller
 */
@Controller('contentDetails')
@ApiTags('ContentDetails')
export class ContentDetailController {
  constructor(
    private readonly _createContentDetail: CreateContentDetail,
    private readonly _findAllContentDetail: FindAllContentDetail,
    private readonly _findOneContentDetail: FindOneContentDetail,
    private readonly _updateContentDetail: UpdateContentDetail,
    private readonly _deleteContentDetail: DeleteContentDetail,
  ) {}

  /**
   * Create a new contentDetail
   * @param createContentDetailDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createContentDetailDto: ContentDetailRequestDto) {
    return this._createContentDetail.handle(createContentDetailDto);
  }

  /**
   * Get all contentDetails
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllContentDetail.handle();
  }
  /**
   * Get todo by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneContentDetail.handle(+id);
  }

  /**
   * Update todo
   * @param id
   * @param updateContentDetailDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(
    @Param('id') id: string,
    @Body() updateContentDetailDto: ContentDetailUpdateDto,
  ) {
    return this._updateContentDetail.handle(+id, updateContentDetailDto);
  }

  /**
   * Delete todo
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deleteContentDetail.handle(+id);
  }
}
