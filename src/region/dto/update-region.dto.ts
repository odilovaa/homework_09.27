import { PartialType } from '@nestjs/swagger';
import { CreateRegionDto } from './create-region.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateRegionDto extends PartialType(CreateRegionDto) {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name?: string;
}
