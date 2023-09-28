import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const start = async () => {
  try {
    const config = new DocumentBuilder()
    .setTitle('Stadium finder')
    .setDescription('Mini project for stadium')
    .setVersion('1.0.0')
    .addTag('NodeJs, NestJs, JWT, Sequelize, Swagger, Postgres')
    .build();

    const PORT = process.env.PORT || 4000;
    const app = await NestFactory.create(AppModule);
    const documet = await SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/docs', app, documet)

    
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());


    await app.listen(PORT, () => {
      console.log(`Server  listening on ${PORT}`);
      
    })
  } catch (error) {
    console.log(error);
  }
}

start();
