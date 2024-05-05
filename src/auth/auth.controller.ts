import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingInDto } from './dtos/SignIn.dto';
import { LocalGuard } from './dtos/local.guard';
import {Request} from 'express'
import User from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { isLoginPublic } from 'src/common/is-public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, 
                private readonly jwtService: JwtService){}


    @Post('login')
    @isLoginPublic()
    async login(@Req() request: Request){
        const user = request.user as User;
        const payload = {
            sub: user.name,
            name: `${user.name} ${user.lastname}`,
            iat: new Date().getTime(),
        }
        
        const accessToek = await this.jwtService.signAsync(payload);
        return {
            access_token: accessToek
        }
    }
}
