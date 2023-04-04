import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TableDocument = Table & Document;

@Schema()
export class Table {
  @Prop({ required: false, type: String })
  mois?: string;
  @Prop({ required: true, type: String })
  phaseLun: string;
  @Prop({ required: true, type: String })
  date: string;
  @Prop({ required: true, type: String })
  signe: string;
  @Prop({ required: true, type: String })
  coverPath: string;
}

export const TableSchema = SchemaFactory.createForClass(Table);
