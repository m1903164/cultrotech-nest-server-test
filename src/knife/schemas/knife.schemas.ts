import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export enum Category {
    GOLDLINE = 'Gold Line',
    SILVERLINE = 'Silver line',
    CUSTOMKNIVES = 'Custom knives',
    FIXBLADE = 'Fix blade'
}

@Schema({
    timestamps: true
})

export class Knife{
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    quantity: number;

    @Prop()
    price: number;

    @Prop()
    category: Category
}

export const KnifeSchema = SchemaFactory.createForClass(Knife)