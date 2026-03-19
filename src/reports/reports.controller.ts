import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ReportsService } from './reports.service';
import { CreateReportDtoIn } from './dto/create-report.dto-in';
import { CreateReportDtoOut } from './dto/create-report.dto-out';
import { createReportDtoToReport } from './convertors';
import { ReportDocument } from './schemas/report.schema';

@ApiTags('reports')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  @ApiOkResponse({ description: 'List all reports' })
  findAll(): Promise<ReportDocument[]> {
    return this.reportsService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CreateReportDtoIn })
  @ApiCreatedResponse({
    description: 'Report created successfully',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string', example: '665a7f2e5f9c3d2a1b4c1234' },
      },
    },
  })
  async create(
    @Body() createReportDto: CreateReportDtoIn,
  ): Promise<CreateReportDtoOut> {
    const created = await this.reportsService.create(
      createReportDtoToReport(createReportDto),
    );

    return { id: created._id.toString() };
  }
}
