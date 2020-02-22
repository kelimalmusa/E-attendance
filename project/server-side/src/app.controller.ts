import {
  Controller,
  Get,
  Post,
  Res,
  Req,
  Body,
  UseGuards
} from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthGuard } from "@nestjs/passport";
import { LocalAuthGuard } from "./auth/auth/local-auth.guard";
import { AuthService } from "./auth/auth/auth.service";
import { JwtAuthGuard } from "./auth/auth/jwt-auth.guard";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Req() req) {
    return this.authService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Req() req) {
    return req.user;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  setHello(@Body() body: { data: string }) {
    console.dir(body);
    return "-- gönderilen veri " + body.data;
  }
}
