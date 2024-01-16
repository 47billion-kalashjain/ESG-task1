import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class emission {
   @Prop()
   activityName:string
   @Prop()
   activityType:string
   @Prop()
   category:string
   @Prop()
   catId:string
   @Prop()
   country:string
   @Prop()
   measure:number
   @Prop()
   unit:string
   @Prop()
   emission:number
 
}
export const emissionSchema=SchemaFactory.createForClass(emission);


