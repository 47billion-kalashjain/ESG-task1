import { Module } from '@nestjs/common';
import { ScopeController } from './scope.controller';
import { ScopeService } from './scope.service';
import { MongooseModule } from '@nestjs/mongoose';
import { scope, scopeSchema } from 'src/schema/scope.schema';
@Module({
  imports:[MongooseModule.forFeature([{ name: scope.name, schema: scopeSchema}])],
  controllers: [ScopeController],
  providers:[ScopeService]
})
export class ScopeModule {}
