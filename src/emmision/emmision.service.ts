import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createEmissionDto } from 'src/dto/emmision/create-emmision.dto';
import { Category } from 'src/schema/category.schema';
import { emFactor } from 'src/schema/emfactor.schema';
import { emission } from 'src/schema/emmision.schema';
import { scope } from 'src/schema/scope.schema';

@Injectable()
export class EmissionService {
    constructor(@InjectModel(emission.name) private emModel: Model<emission>,
        @InjectModel(emFactor.name) private emFactorModel: Model<emFactor>,
        @InjectModel(scope.name) private scopeModel: Model<scope>,

    ) { }

    async updateTotalEmission(scopeNum: number, emmisionValue: number, activityName: string): Promise<scope> {
        const scopeObj = await this.scopeModel.findOneAndUpdate(
            { scope: scopeNum },
            { scope: scopeNum },
            { upsert: true, new: true }
        );


        if (!scopeObj) {
            console.log("Can't create scopeObj");
            return null

        } else {
            console.log("Initial total emmision is =>"+(scopeObj.totalEmmision));
            
            scopeObj.totalEmmision += emmisionValue
            scopeObj.data.push({ key: activityName, value: emmisionValue })
            const updateobj = scopeObj.save();
            return updateobj;
        }


    }

    async addEmmision(emission: createEmissionDto): Promise<emission> {
        const em = await this.emModel.create(emission);
        let emmisionValue = 0;
        const emF = await this.emFactorModel.findOne({ catId: em.catId })
        const index = emF.unit.indexOf(em.unit);
        let factor = emF.factor[index]
        emmisionValue = em.measure * factor
        em.emission = emmisionValue
        const updatedEmmision = await em.save()
        let scopeNum = emF.scope
        await this.updateTotalEmission(scopeNum, emmisionValue, updatedEmmision.activityName)
        return updatedEmmision;
    }
    // async updateEmmision(emmision:update,id:string):Promise<emission>{

    // }
    async deleteEmmision(id: string): Promise<emission> {
        const em = await this.emModel.findByIdAndDelete(id);
        return em;
    }

    async getAllEmmision(): Promise<emission[]> {
        return await this.emModel.find();
    }
    async getEmmision(id: string): Promise<emission> {
        return await this.emModel.findById(id);
    }

}
