import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FavorisDocument = Favoris & Document;

@Schema()
export class Favoris {
  @Prop({ type: String })
  _id?: string;

  @Prop({ required: true, type: String })
  favori: string;
}

export const FavorisSchema = SchemaFactory.createForClass(Favoris);
