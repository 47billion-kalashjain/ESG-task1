import { Get, Module } from '@nestjs/common';
import { EmFactorService } from './em-factor.service';
import { EmFactorController } from './em-factor.controller';
import { emFactor, emFactorSchema } from 'src/schema/emfactor.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: emFactor.name, schema: emFactorSchema}])],
  providers: [EmFactorService],
  controllers: [EmFactorController]
})
export class EmFactorModule {

}
