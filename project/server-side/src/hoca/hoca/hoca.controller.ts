import {
  Controller,
  Get,
  Body,
  Res,
  HttpStatus,
  Post,
  Param
} from "@nestjs/common";
import { HocaService } from "./hoca.service";
import { Hoca } from "src/models/hoca";
import { ResultPackage } from "src/common/result-package";
import { Response } from "express";

@Controller("hoca")
export class HocaController {
  constructor(private hos: HocaService) {}
  @Post()
  insertNewHoca(@Body() body: Hoca, @Res() res: Response) {
    this.hos
      .insertHoca(body)
      .then(() => {
        res.status(HttpStatus.OK).json(ResultPackage.success());
      })
      .catch(() =>
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed())
      );
  }
  @Get()
  getHoca(@Res() res: Response) {
    this.hos
      .findAll()
      .then(data => {
        res.status(HttpStatus.OK).json(ResultPackage.success(data));
      })
      .catch(() =>
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed())
      );
  }
  @Get("/:id")
  getHocaById(@Res() res: Response, @Param("id") id: number) {
    this.hos
      .getHocaById([id])
      .then(data => {
        res.status(HttpStatus.OK).json(ResultPackage.success(data));
      })
      .catch(() => {
        console.log("Buarad");
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }
}
