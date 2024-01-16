import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class scope{
    @Prop()
    scope:number
    @Prop({ default: 0 })
    totalEmmision:number
    @Prop([{ key: String, value: Number }])
    data: Array<{ key: string, value: number }>; //activityName:emmsion
}

export const scopeSchema =SchemaFactory.createForClass(scope);
 