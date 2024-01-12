import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({timestamps:true})
export class Activity {
    @Prop({required:true})
    activityType:string
    @Prop({required:true})
    categories:string[]
}

export const ActivitySchema=SchemaFactory.createForClass(Activity);
