import { UploadAdapter } from '@app/modules/common/adapters/upload/uploadAdapter.service';
import { UploadRequestDto } from '@app/modules/utilitaria/domain/upload/dto/upload-request.dto';
import { UploadResponseDto } from '@app/modules/utilitaria/domain/upload/dto/upload-response.dto';
import { Injectable } from '@nestjs/common';

/**
 * Service class for creating a new upload.
 */
@Injectable()
export class Upload {
  /**
   * Creates an instance of the UploadService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _uploadRepository - The repository for managing User entities.
   */
  constructor(private readonly _uploadAdapter: UploadAdapter) {}

  /**
   * Handles the creation of a new upload.
   *
   * @param createUserDto - The data transfer object containing the upload details.
   * @returns The response containing the created upload.
   */
  async handle(request: UploadRequestDto): Promise<UploadResponseDto> {
    const response = await this._uploadAdapter.sendUpload(request);
    return response;
  }
}
