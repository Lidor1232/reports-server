import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsMongoId,
  ValidateNested,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

class LocationDto {
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @IsNumber({}, { each: true })
  coordinates: [number, number];
}

export class CreateReportDtoIn {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsMongoId()
  forceId: string;

  @ValidateNested()
  @Type(() => LocationDto)
  location: LocationDto;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  date: string;
}

