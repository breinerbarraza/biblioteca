import { TransactionInterceptor } from '@app/modules/common/interceptors/transaction.interceptor';
import { UploadRequestDto } from '@app/modules/utilitaria/domain/upload/dto/upload-request.dto';
import { Upload } from '@app/modules/utilitaria/services/useCases/upload/upload.service';
import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * Upload controller
 */
@Controller('upload')
@ApiTags('Uploads')
export class UploadController {
  constructor(private readonly _upload: Upload) {}

  /**
   * Upload
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  upload(@Body() uploadDto: UploadRequestDto) {
    return this._upload.handle(uploadDto);
  }
}
