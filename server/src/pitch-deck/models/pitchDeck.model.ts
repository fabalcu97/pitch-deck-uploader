import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({})
export class PitchDeck {
  @Prop({ index: 'text' })
  companyName: string;

  @Prop({ default: () => new Date().toISOString() })
  dateCreated: string;

  @Prop()
  images: string[];
}

export type PitchDeckDocument = PitchDeck & Document;

export const PitchDeckSchema = SchemaFactory.createForClass(PitchDeck);
