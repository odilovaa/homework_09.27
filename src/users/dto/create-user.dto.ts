import { IsDateString, IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword, MinLength } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @MinLength(6)
    @IsStrongPassword()
    password: string;

    @MinLength(6)
    @IsStrongPassword()
    confirm_password: string;

    @IsNotEmpty()
    @IsString()
    telegram_link: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber("UZ")
    phone: string;

    @IsNotEmpty()
    @IsDateString()
    birthday: Date;
}
