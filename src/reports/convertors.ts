import { Types } from 'mongoose';
import { CreateReportDtoIn } from './dto/create-report.dto-in';
import { Report } from './schemas/report.schema';

export function createReportDtoToReport(dto: CreateReportDtoIn): Report {
  return {
    type: dto.type,
    forceId: new Types.ObjectId(dto.forceId),
    location: {
      type: 'Point',
      coordinates: dto.location.coordinates,
    },
    description: dto.description,
    date: new Date(dto.date),
    status: 'active',
  };
}

