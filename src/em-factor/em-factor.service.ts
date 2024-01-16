import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { createEmfdto } from 'src/dto/emFactor/create-emF.dto';
import { updateEmfdto } from 'src/dto/emFactor/update-emF.dto';
import { emFactor } from 'src/schema/emfactor.schema';

@Injectable()
export class EmFactorService {
    constructor(@InjectModel(emFactor.name) private emfModel: mongoose.Model<emFactor>
    ) { }

    // updateRemain(obj:createEmfdto):{
    //     return 
    // }

    async updateRemain(obj: any) {
        let factorKg = obj.factor[0]
        let factorHr = obj.factor[1]
        obj.factor.push(factorKg / 1000)
        obj.factor.push(factorHr / 60)
        obj.factor.push(factorKg / 1000000)
        obj.factor.push(factorHr / 3600)
    }
    async createEmf(obj: createEmfdto): Promise<emFactor | { message: string }> {
        console.log(obj);
        const checkExist = await this.emfModel.findOne({ catId: obj.catId });
        console.log(checkExist);

        if (checkExist) {
            return { message: "em factor for the catId already exists" };
        }
        // If already exist 

        await this.updateRemain(obj)
        console.log(obj);

        const updatedObj = await this.updateRemain(obj);
        return this.emfModel.create(obj);
    }

    async getAllEmf(): Promise<emFactor[]> {
        return this.emfModel.find();

    }

    async getEmf(id: string): Promise<emFactor> {
        return this.emfModel.findById(id);

    }

    async updateEmf(obj: updateEmfdto): Promise<emFactor> {
        // let id = obj.id;
        // console.log(obj.catId);

        let obj2 = await this.emfModel.findOne({ catId: obj.catId });
        console.log(obj2);

        if (!obj2) {
            return null;
        }
        // this is to update the value at the original factor array
        console.log(obj2.factor);
        console.log(obj.factor);


        for (let i = 0; i < obj.unit.length; i++) {
            let index = obj2.unit.indexOf(obj.unit[i]);
            (obj2).factor[index] = (obj).factor[i];
        }

        console.log(obj2);

        const updatedEmf = await (obj2).save();
        //    console.log(updatedEmf);


        return updatedEmf;

    }

}
