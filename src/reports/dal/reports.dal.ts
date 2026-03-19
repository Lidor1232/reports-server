import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report, ReportDocument } from '../schemas/report.schema';

@Injectable()
export class ReportsDal {
  constructor(
    @InjectModel(Report.name) private reportModel: Model<ReportDocument>,
  ) {}

  async findAll(): Promise<ReportDocument[]> {
    return this.reportModel.find().exec();
  }

  async create(report: Report): Promise<ReportDocument> {
    return this.reportModel.create(report);
  }
}
