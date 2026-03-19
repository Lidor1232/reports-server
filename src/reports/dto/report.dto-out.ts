import { ApiProperty } from '@nestjs/swagger';

export class ReportDtoOut {
  @ApiProperty({
    example: '665a7f2e5f9c3d2a1b4c1234',
    description: 'Report id',
  })
  id: string;

  @ApiProperty({
    example: 'some-type',
    description: 'Report type',
  })
  type: string;

  @ApiProperty({
    example: '665a7f2e5f9c3d2a1b4c5678',
    description: 'Force id',
  })
  forceId: string;

  @ApiProperty({
    example: { type: 'Point', coordinates: [30.5, 50.5] },
    description: 'Report location (GeoJSON Point)',
    type: 'object',
    properties: {
      type: { type: 'string', example: 'Point' },
      coordinates: { type: 'array', items: { type: 'number' }, example: [30.5, 50.5] },
    },
  })
  location: { type: string; coordinates: [number, number] };

  @ApiProperty({
    example: 'Test report description',
    description: 'Report description',
  })
  description: string;

  @ApiProperty({
    example: '2026-03-19T12:34:56.000Z',
    description: 'Report date (ISO string)',
  })
  date: string;

  @ApiProperty({
    example: 'active',
    description: 'Report status',
  })
  status: string;
}

