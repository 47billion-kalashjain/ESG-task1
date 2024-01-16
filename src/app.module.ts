import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from './activity/activity.module';
import { CategoriesModule } from './categories/categories.module';
import { EmFactorModule } from './em-factor/em-factor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EmmisionModule } from './emmision/emmision.module';


@Module({
  imports: [MongooseModule.forRoot("mongodb://mongodb:mongodb@localhost:27018"),ActivityModule, CategoriesModule, EmFactorModule, EmmisionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
