import { Injectable } from '@nestjs/common';
import { ReportsDal } from './dal/reports.dal';
import { ReportDocument } from './schemas/report.schema';

@Injectable()
export class ReportsService {
  constructor(private readonly reportsDal: ReportsDal) {}

  async findAll(): Promise<ReportDocument[]> {
    return this.reportsDal.findAll();
  }
}
