import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const port = process.env.PORT ?? 3000;
  const host = '0.0.0.0';
  await app.listen(port, host);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}
bootstrap();
