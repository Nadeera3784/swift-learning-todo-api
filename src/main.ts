import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './modules/app/app.module';
import { urlencoded } from 'express';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.use(urlencoded({ extended: true }));

  app.setGlobalPrefix('api/v1/');

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const port = process.env.PORT || 3000;

  await app.listen(port);

  return port;
}

bootstrap().then((port) =>
  console.log(`App successfully started on port ${port} !`),
);
