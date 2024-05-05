import { IsOptional, IsString, isString } from "class-validator";
import CreateUserDto from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types";

export default class UpdateUserDto extends PartialType(CreateUserDto) /* heredar del userdto para las validaciones*/
{
}