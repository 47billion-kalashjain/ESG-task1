import { Module } from '@nestjs/common';
import { EmissionService } from './emmision.service';
import { EmmisionController } from './emmision.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { emFactor, emFactorSchema } from 'src/schema/emfactor.schema';
import { emission, emissionSchema } from 'src/schema/emmision.schema';
import { scope, scopeSchema } from 'src/schema/scope.schema';

@Module({
  imports:[ MongooseModule.forFeature([{ name: emFactor.name, schema: emFactorSchema},{name:emission.name,schema:emissionSchema},{name:scope.name,schema:scopeSchema}]),
],
  providers: [EmissionService],
  controllers: [EmmisionController]
})
export class EmmisionModule {}
