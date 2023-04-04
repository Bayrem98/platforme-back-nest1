import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Rating } from '../dto/rating.entity';

export type RatingDocument = Ratings & Document;

@Schema()
export class Ratings {
  @Prop({ type: String })
  id_: string;
  @Prop({ required: true, type: Number })
  score: number;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);
