import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  setHello(@Body() body: {data: string}) {
    console.dir(body);
    return "-- gönderilen veri " + body.data;
  }
}
