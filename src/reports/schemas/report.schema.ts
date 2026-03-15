import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Location, LocationSchema } from './location.schema';

export type ReportDocument = HydratedDocument<Report>;

@Schema({ timestamps: true })
export class Report {
  @Prop({ required: true })
  type: string;

  @Prop({ type: Types.ObjectId, ref: 'Force', required: true })
  forceId: Types.ObjectId;

  @Prop({ type: LocationSchema, required: true })
  location: Location;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true, default: 'active' })
  status: string;
}

export const ReportSchema = SchemaFactory.createForClass(Report);

ReportSchema.index({ location: '2dsphere' });
