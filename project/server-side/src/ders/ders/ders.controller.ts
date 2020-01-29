import {
  Controller,
  Get,
  Post,
  Res,
  Body,
  HttpStatus,
  Delete,
  Param
} from "@nestjs/common";
import { Response } from "express";
import { DersService } from "./ders.service";
import { Ders } from "src/models/models";
import { ResultPackage } from "src/common/result-package";

@Controller("ders")
export class DersController {
  constructor(private deS: DersService) {}
  @Post()
  insertNewDers(@Res() res: Response, @Body() body: Ders) {
    this.deS
      .insertNewDers(body)
      .then(() => {
        res.status(HttpStatus.OK).json(ResultPackage.success());
      })
      .catch(() => {
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }
  @Get()
  findAllDers(@Res() res: Response) {
    this.deS
      .findAll()
      .then(data => {
        res.status(HttpStatus.OK).json(ResultPackage.success(data));
      })
      .catch(() => {
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }
  @Delete()
  deleteDersByDersCode(
    @Res() res: Response,
    @Param("dersCode") dersCode: string
  ) {
    this.deS
      .deleteDersByDersCode(dersCode)
      .then(() => {
        res.status(HttpStatus.OK).json(ResultPackage.success());
      })
      .catch(() => {
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }
}
