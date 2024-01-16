import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { scope } from 'src/schema/scope.schema';

@Injectable()
export class ScopeService {
    constructor(@InjectModel(scope.name) private scopeModel:Model<scope>) { }

    async getScope(): Promise<scope[]> {
        return await this.scopeModel.find();
    }
    async getParticularScope(scopeNum: number) {
        return await this.scopeModel.findOne({ scope: scopeNum })
    }

}
