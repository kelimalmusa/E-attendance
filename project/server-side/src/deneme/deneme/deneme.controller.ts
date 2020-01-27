import {
  Controller,
  Post,
  Req,
  Body,
  Res,
  HttpStatus,
  Get
} from "@nestjs/common";
import { DenemeService } from "./deneme.service";
import { Response } from "express";
import { ResultPackage } from "src/common/result-package";
import { deneme } from "../../../../models/deneme";

@Controller("api/deneme")
export class DenemeController {
  constructor(private service: DenemeService) {}

  @Post()
  setUser(@Body() body: deneme, @Res() res: Response) {
    console.log("body");
    console.dir(body); //model ekleyince any'i model tipine döndür
    console.log(" -- end of body");
    this.service
      .saveToDatabase(body)
      .then(() => res.status(HttpStatus.OK).json(ResultPackage.success()))
      .catch(() =>
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed())
      );
  }
  @Get()
  getTweet(@Res() res: Response) {
    this.service
      .tt()
      .then(data => {
        res.status(HttpStatus.OK).json(ResultPackage.success(data));
        console.log(data);
      })
      .catch(() =>
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed())
      );
  }
}
