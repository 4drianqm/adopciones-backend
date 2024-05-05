import { IsEmail, IsOptional, IsString, IsUrl, MaxLength, MinLength, isString } from "class-validator";

export default class CreateUserDto{
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    name: string;

    @IsString()
    @MinLength(1)
    @MaxLength(255)
    lastname: string;

    @IsString()
    email: string;

    @IsString()
    @IsOptional()
    addres: string;

    @IsString()
    password: string;
}
