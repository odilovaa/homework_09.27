import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateDistrictDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    regionId: number;
}
