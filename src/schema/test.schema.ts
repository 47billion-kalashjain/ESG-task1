import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({timestamps:true})
export class Test {
    @Prop()
    name:string
    @Prop()
    age:number
    @Prop()
    city:string

}

export const TestSchema=SchemaFactory.createForClass(Test);
