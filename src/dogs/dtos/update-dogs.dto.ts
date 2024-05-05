import { PartialType } from "@nestjs/mapped-types";
import CreateDogDto from "./create-dogs.dto";

export default class UpdateDogDto extends PartialType(CreateDogDto)
{}