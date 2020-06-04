import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Cat extends Document {
    @Prop({ required: true })
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);