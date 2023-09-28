import { IsNotEmpty, IsString } from "class-validator";

export class CreateComfortDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
