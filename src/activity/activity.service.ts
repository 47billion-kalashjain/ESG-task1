import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { log } from 'console';
import mongoose from 'mongoose';
import { abort } from 'process';
import { createactivitdto } from 'src/dto/activity/create-act.dto';
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

    async getAllAct(): Promise<Activity[]> {
        const activities = this.activityModel.find();
        return activities;
    }

    async getAct(id: string): Promise<Activity> {
        const activity = this.activityModel.findById(id)
        return activity;
    }

    async createAct(act: createactivitdto): Promise<Activity> {
        const newSet = new Set(act.categories);
        const newArray = Array.from(newSet);
        console.log(newArray);
        
        act.categories = newArray;
        console.log(typeof(newArray));
        console.log(typeof(act.categories));

        
        console.log(act.categories);
    
    
        // Assuming this.activityModel.create returns a Promise
        const activity = await this.activityModel.create(act);
        return activity;
    }
    
    async updateAct(act: any): Promise<Activity> {
        //update type if type was renamed
        let newActivity = await this.activityModel.findById(act.id);

        if (act.activityType !== "") {
            newActivity.activityType = act.activityType;
        }
        const rm1 = new Set(act.rm);
        const add1 = new Set(act.add);

       let categories1 = new Set(newActivity.categories);

        // Removing values from Set using Set.delete
        rm1.forEach((valueToRemove: string) => {
            categories1.delete(valueToRemove);
        });
        
        // Adding values to Set using Set.add
        add1.forEach((valueToAdd: string) => {
            categories1.add(valueToAdd);
        });
        
        // Converting Set back to array if necessary
        newActivity.categories = Array.from(categories1);





        // Save the updated activity
        const updatedActivity = await newActivity.save();

        return updatedActivity;

    }

    // async deleteAct(id:string):Promise<Activity>{
    //     const act =this.activityModel.deleteOne()
    //     return act;
    // }

}
