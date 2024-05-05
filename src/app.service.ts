import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { App } from 'supertest/types';

@Injectable()
export class AppService {

  constructor(private readonly configService: ConfigService){}

  getHello(): string {
    return 'Hola mundo!';
  }

  getMessage(): string{
    return this.configService.get('MESSAGE');
  }
}
