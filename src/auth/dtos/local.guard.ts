import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";


@Injectable()
export class LocalGuard extends AuthGuard('local'){
    constructor(private readonly reflector: Reflector){
        super();
    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const isLoginPublic = this.reflector.getAllAndOverride<boolean>('isLoginPublic', [
            context.getHandler(),
            context.getClass()
        ])
        console.log('isLoginPublic',isLoginPublic);

        if(isLoginPublic){
            return true
        }
        
        return super.canActivate(context);
    }
}