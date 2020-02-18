import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Param,
  Delete
} from "@nestjs/common";
import { DersService } from "./ders.service";
import { HocaService } from "src/hoca/hoca/hoca.service";
import { ResultPackage } from "src/common/result-package";
import { Ders } from "src/models/ders";
import { Response } from "express";

@Controller("ders")
export class DersController {
  constructor(private deS: DersService, private hocaSer: HocaService) {}
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
  @Post()
  insertNewDers(@Res() res: Response, @Body() body: Ders) {
    this.deS
      .insertNewDers(body)
      .then(result => {
        res.status(HttpStatus.OK).json(ResultPackage.success(result.rows));
      })
      .catch(() => {
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }
  @Get(":dersCode")
  getDersByCodeOrName(@Res() res: Response, @Param("dersCode") param: string) {
    this.deS
      .findDersByDersCodeOrName(param)
      .then(result => {
        res.status(HttpStatus.OK).json(ResultPackage.success(result));
      })
      .catch(() => {
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }
  @Delete(":dersCode")
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
  @Post(":dersCode")
  updateDersByDersCode(
    @Res() res: Response,
    @Param("dersCode") dersCode: string,
    @Body() ders: Ders
  ) {
    this.deS
      .updateDersByDersCode(ders, dersCode)
      .then(result => {
        res.status(HttpStatus.OK).json(ResultPackage.success(result.rows));
      })
      .catch(() => {
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }
}
