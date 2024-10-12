import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { envs } from '@app/config/envs';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpExceptionFilter } from '@app/modules/common/filters/httpException.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  /**
   * Create the swagger document.
   */
  const config = new DocumentBuilder()
    .setTitle('The API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  if (process.env.NODE_ENV !== 'production') {
    SwaggerModule.setup('/docs', app, document);
  }

  await app.listen(envs.PORT);

  Logger.log(
    `Server running on http://localhost:${envs.PORT}/docs`,
    `Bootstrap`,
  );
}
bootstrap();
