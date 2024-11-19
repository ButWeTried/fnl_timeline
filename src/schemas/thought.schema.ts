import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ThoughtDocument = Thought & Document;

export enum ThoughtType {
  POST = 'POST',
  COMMENT = 'COMMENT',
}

@Schema({
  timestamps: true,
})
export class Thought {
  @Prop({
    required: true,
    enum: Object.values(ThoughtType),
    default: ThoughtType.POST,
  })
  type: ThoughtType;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  private: boolean;

  @Prop({ required: true })
  owner: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: false })
  comments: string[];
}

export const ThoughtSchema = SchemaFactory.createForClass(Thought);
