import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UnorderedBulkOperation } from 'typeorm';
import * as bcript from 'bcrypt';
import User from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}

  async singIn(email: string, password: string): Promise <User>{
    
    const user  = await this.userService.fidOneByEmail(email);
    if(user === undefined){
        throw new UnauthorizedException();
    }

    const isMatch = await bcript.compare(password, user.password);
    
    if (!isMatch){
        throw new UnorderedBulkOperation();
    }

    return user;
  }
}
