import { UploadRequestDto } from '@app/modules/utilitaria/domain/upload/dto/upload-request.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class UploadAdapter {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY_CLOUDINARY,
      api_secret: process.env.API_SECRET_CLOUDINARY,
    });
  }

  async sendUpload(request: UploadRequestDto) {
    try {
      if (!request?.base64)
        throw new BadRequestException('No se subió ningún archivo');

      const response = await cloudinary.uploader.upload(request?.base64, {
        folder: request?.folder,
        resource_type: request?.type,
        display_name: request?.name,
      });
      console.log(1111, response);

      return {
        message: 'Archivo subido correctamente',
        url: response.secure_url,
      };
    } catch (error) {
      throw new Error('Error al subir el archivo: ' + error);
    }
  }
}
