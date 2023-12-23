import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class Activity extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Date, default: Date.now })
  created_at: Date;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
