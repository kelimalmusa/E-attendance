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
import { HocaService } from "src/hoca/hoca/hoca.service";

@Controller("ders")
export class DersController {
  constructor(private deS: DersService, private hocaSer: HocaService) {}
  @Post()
  insertNewDers(@Res() res: Response, @Body() body: Ders) {
    this.deS
      .insertNewDers(body)
      .then(result => {
        res.status(HttpStatus.OK).json(ResultPackage.success(result));
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
  @Post(":dersCode")
  updateDersByDersCode(
    @Res() res: Response,
    @Param("dersCode") dersCode: string,
    @Body() ders: Ders
  ) {
    this.deS
      .updateDersByDersCode(ders, dersCode)
      .then(result => {
        res.status(HttpStatus.OK).json(ResultPackage.success(result));
      })
      .catch(() => {
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }
}
