import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from './dtos/create-user.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import User from './entities/user.entity';
import { JwtGuard } from 'src/auth/jwt.guard';
import { IsPublic } from 'src/common/is-public.decorator';


@ApiTags('users') // tener tags en la documentacion de APIs, es una etiqueta
@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ){}


    @Get()
    @IsPublic()
    findAll(){
        const records = this.userService.findAll();
        return records;
    }

    @Post('sign-up')
    @IsPublic()
    crateUsers(@Body() body: CreateUserDto){
        return this.userService.create(body);
    }

    @Get('confirm-email')
    confirmEmail(): string{
        return 'This action returns confirm the email';
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.userService.findOne(id);
    }


    @Post()
    @ApiCreatedResponse({description: 'Este endpoint sirve para crear nuevos usuarios', type: User})
    create(@Body() body: CreateUserDto){
        return this.userService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() body){
        return this.userService.update(id, body)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    destroy(@Param('id') id: number){
        return this.userService.remove(id);
    }

}