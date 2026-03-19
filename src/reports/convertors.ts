import { Types } from 'mongoose';
import { CreateReportDtoIn } from './dto/create-report.dto-in';
import { Report, ReportDocument } from './schemas/report.schema';
import { ReportDtoOut } from './dto/report.dto-out';

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

export function reportDocumentToReportDtoOut(
  document: ReportDocument,
): ReportDtoOut {
  const date = document.date instanceof Date ? document.date : new Date(document.date);

  return {
    id: document._id.toString(),
    type: document.type,
    forceId: document.forceId.toString(),
    location: {
      type: document.location.type,
      coordinates: document.location.coordinates,
    },
    description: document.description,
    date: date.toISOString(),
    status: document.status,
  };
}

