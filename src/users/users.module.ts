import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';
import User from './entities/user.entity';
import Role from './entities/role.entity';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from 'src/auth/jwt.guard';

@Module({
    imports: [TypeOrmModule.forFeature([User, Role])], /*Registrar las entidades del modulo*/
    controllers: [UsersController, RolesController],
    providers: [UsersService, RolesService, {
        provide: APP_GUARD,
        useClass: JwtGuard
    }], /* provider es un servicio */
    exports: [UsersService],    // exportar el servicio a otros modulos
})
export class UsersModule {}