import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({timestamps:true})
export class emFactor {
    @Prop()
    catId:string
    @Prop({default:["kg","hr","dollar","gm","min","mg","sec"]})
    unit:string[]
    @Prop()
    factor:number[]
    @Prop()
    scope:number
 
}

export const emFactorSchema=SchemaFactory.createForClass(emFactor);
