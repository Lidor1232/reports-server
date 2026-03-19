import { ApiProperty } from '@nestjs/swagger';

export class CreateReportDtoOut {
  @ApiProperty({
    example: '665a7f2e5f9c3d2a1b4c1234',
    description: 'Created report id',
  })
  id: string;
}

