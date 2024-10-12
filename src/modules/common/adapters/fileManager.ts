import { base64ToArrayBuffer } from '../utils';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { HttpException, Injectable, Scope } from '@nestjs/common';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable({ scope: Scope.REQUEST })
export class FileManager {
  /**
   * Se conecta a AWS3 con las credenciales pertinentes
   * @version 0.0.1
   * @return {boolean} la conexión
   */
  AWS3() {
    return new S3Client({
      region: process.env.REGION_BUCKET,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }
  /**
   * Constructor
   * @param url end point
   * @param config request config
   * @returns
   */
  async uploadFileS3(base64: string, route: string) {
    const S3 = this.AWS3();

    const ArrayBuffer = await base64ToArrayBuffer(base64);

    const buffer = Buffer.from(ArrayBuffer);

    const uploadParams = {
      Bucket: process.env.AWS_BUCKET_ACCESS_KEY,
      Key: route,
      Body: buffer,
    };
    try {
      const response = await S3.send(new PutObjectCommand(uploadParams));

      return response;
    } catch (error) {
      throw new HttpException(
        `Error al subir archivo: ${error?.message || ''}`,
        error?.status || 500,
      );
    }
  }

  getFileUrlS3 = async (Key: string, exp?: number): Promise<string> => {
    const S3 = this.AWS3();
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_ACCESS_KEY,
      Key,
    });

    return await getSignedUrl(S3, command, {
      ...(exp ? { expiresIn: exp } : {}),
    });
  };
}
