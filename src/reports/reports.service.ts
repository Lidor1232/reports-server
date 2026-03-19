import { Injectable } from '@nestjs/common';
import { ReportsDal } from './dal/reports.dal';
import { Report, ReportDocument } from './schemas/report.schema';

@Injectable()
export class ReportsService {
  constructor(private readonly reportsDal: ReportsDal) {}

  async findAll(): Promise<ReportDocument[]> {
    return this.reportsDal.findAll();
  }

  async create(report: Report): Promise<ReportDocument> {
    return this.reportsDal.create(report);
  }
}
