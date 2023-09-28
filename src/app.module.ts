import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';
import { ComfortModule } from './comfort/comfort.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [

    ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true
      }),
      
      SequelizeModule.forRoot({
        dialect:"postgres",
        host:process.env.POSTGRES_HOST,
        port:+process.env.POSTGRES_PORT,
        username:process.env.POSTGRES_USER,
        password:String(process.env.POSTGRES_PASSWORD),
        database:process.env.POSTGRES_DB,
        models:[User],
        autoLoadModels: true,
        logging: true,
      }),
      
      UsersModule,
      
      ComfortModule,
      
      RegionModule,
      
      DistrictModule,
      
      CategoriesModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
