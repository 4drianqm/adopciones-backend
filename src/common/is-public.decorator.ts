import { SetMetadata } from "@nestjs/common";

export const IsPublic = () =>  SetMetadata('isPublic', true);

export const isLoginPublic= ()=> SetMetadata('isLoginPublic', true);