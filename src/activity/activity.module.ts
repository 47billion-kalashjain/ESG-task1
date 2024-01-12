import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { TestSchema } from 'src/schema/test.schema';
import { Activity, ActivitySchema } from 'src/schema/activity.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Test.name, schema: TestSchema},{ name: Activity.name, schema: ActivitySchema }]),
  ],
 
  controllers: [ActivityController],
  providers: [ActivityService]
})
export class ActivityModule {}
