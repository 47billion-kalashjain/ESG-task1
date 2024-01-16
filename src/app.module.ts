import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from './activity/activity.module';
import { CategoriesModule } from './categories/categories.module';
import { EmFactorModule } from './em-factor/em-factor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EmmisionModule } from './emmision/emmision.module';
import { ScopeModule } from './scope/scope.module';
import { ScopeService } from './scope/scope.service';


@Module({
  imports: [MongooseModule.forRoot("mongodb://mongodb:mongodb@localhost:27018"),ActivityModule, CategoriesModule, EmFactorModule, EmmisionModule, ScopeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
