import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import mongoose from 'mongoose';
import { abort } from 'process';
import { Activity } from 'src/schema/activity.schema';

@Injectable()
export class ActivityService {
    constructor(
        @InjectModel(Test.name) private userModel: mongoose.Model<Test>,
        @InjectModel(Activity.name) private activityModel: mongoose.Model<Activity>
    ) { }


    async testReq(test: Test): Promise<Test> {
        console.log(test);

        const us = await this.userModel.create(test);
        return us;
    }

    async getAllAct():Promise<Activity[]>{
        const activities=this.activityModel.find();
        return activities
    }

    async getAct(id:string):Promise<Activity>{
        const activity=this.activityModel.findById(id)
        return activity;
    }

    async createAct(act:Activity):Promise<Activity>{
        const activity=this.activityModel.create(act);
        return activity
    }

    async updateAct(id:string,act:any):Promise<Activity>{
        const arr1: any[] = act.psh; 
        const arr2: any[] = act.rm; 

        return ;

    }

    // async deleteAct(id:string):Promise<Activity>{
    //     const act =this.activityModel.deleteOne()
    //     return act;
    // }

}
