import {HttpAdapterHost, NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import {SupertokensExceptionFilter} from "./api/auth/auth.filter";
import {PrismaClientExceptionFilter} from "./db/prisma/prisma.filter";
import * as Sentry from '@sentry/node';
import appConfig from "./config/app.config";
import {ValidationPipe} from "@nestjs/common";
import { LoggerErrorInterceptor } from 'nestjs-pino';
import * as fs from 'fs-extra';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, appConfig.NODE_ENV !== "DEVELOPMENT" ? {
    httpsOptions: {
      key: fs.readFileSync('./src/secrets/private-key.pem'),
      cert: fs.readFileSync('./src/secrets/public-cert.pem'),
    }
  } : {});

  Sentry.init({
    dsn: appConfig.SENTRY_DSN,
    tracesSampleRate: 1.0,
  });

  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  app.getHttpAdapter().getInstance().set('etag', false);

  app.enableCors({
    origin: true,
    // allowedHeaders: ['Content-Type', ...getCORSAllowedHeaders()],
    credentials: true,
  });
  const config = new DocumentBuilder()
      .setTitle('Cats example')
      .setDescription('The cats API description')
      .setVersion('1.0')
      .addTag('cats')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new SupertokensExceptionFilter());
  app.useGlobalFilters(new PrismaClientExceptionFilter(app.get(HttpAdapterHost)));
  // app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));

  app.useGlobalPipes(new ValidationPipe({ transform: true, disableErrorMessages: true }));

  await app.listen(appConfig.NODE_ENV === "DEVELOPMENT" ? appConfig.PORT: 8443);
}

void bootstrap();
