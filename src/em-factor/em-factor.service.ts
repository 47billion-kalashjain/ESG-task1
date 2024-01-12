import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { createEmfdto } from 'src/dto/emFactor/create-emF.dto';
import { updateEmfdto } from 'src/dto/emFactor/update-emF.dto';
import { emFactor } from 'src/schema/emfactor.schema';

@Injectable()
export class EmFactorService {
    constructor(
        // @InjectModel(Test.name) private userModel: mongoose.Model<Test>,
        // @InjectModel(Activity.name) private activityModel: mongoose.Model<Activity>
        @InjectModel(emFactor.name) private emfModel: mongoose.Model<emFactor>
    ) { }


    async createEmf(obj: createEmfdto): Promise<emFactor> {
        console.log(obj);
        
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
        
        let obj2 = await this.emfModel.findOne({catId:obj.catId});
        console.log(obj2);
        
        if(!obj2){
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
        
        const updatedEmf = await ( obj2).save();
    //    console.log(updatedEmf);
       
        
        return updatedEmf;

    }

}
