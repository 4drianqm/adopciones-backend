import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true /* verificar que mande los datos segun el dto*/,
      forbidNonWhitelisted: true /**No datos adicionales */,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()   //Documentacion para nestjs
    .setTitle('NestJS API')    //  Configurar la documentacion
    .setDescription('Descripccion de la API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config); // Crear el documento
  SwaggerModule.setup('api', app, document); // generar el documento y guardarlo
  await app.listen(3000);
}
bootstrap();
// Yo soy el TypeScript :D
