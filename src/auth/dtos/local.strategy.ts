import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"
import {Strategy} from 'passport-local';
import { AuthService } from "../auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor (private readonly authService: AuthService){
        super({
            usernameField:"email"   // Estamos mandando el correo electronico no el username
        });
    }
    async validate(username: string, password: string){
        const user = await this.authService.singIn(username, password)
        return user;
    }
}