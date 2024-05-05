import { IsString, MaxLength, MinLength } from "class-validator";
import GenderStatus from "../dogs-enum";

export default class CreateDogDto{
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    name: string;

    @IsString()
    @MinLength(1)
    @MaxLength(255)
    breed: string

    @IsString()
    @MinLength(1)
    @MaxLength(10)
    age: string

    @IsString()
    @MinLength(1)
    @MaxLength(255)
    gender: GenderStatus
}