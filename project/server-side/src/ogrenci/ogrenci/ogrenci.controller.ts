import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  Delete,
  Post,
  Body
} from "@nestjs/common";
import { OgrenciService } from "./ogrenci.service";
import { Response } from "express";
import { ResultPackage } from "src/common/result-package";
import * as lodash from "lodash";
import { Ogrenci } from "src/models/models";
@Controller("ogrenci")
export class OgrenciController {
  constructor(private ogrs: OgrenciService) {}
  @Get()
  getOgrenci(@Res() res: Response) {
    this.ogrs
      .findAll()
      .then(data => {
        res.status(HttpStatus.OK).json(ResultPackage.success(data));
      })
      .catch(() =>
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed())
      );
  }
  @Post()
  insertOgrenci(@Body() body: Ogrenci, @Res() res: Response) {
    this.ogrs
      .insertStudent(body)
      .then(() => {
        res.status(HttpStatus.OK).json(ResultPackage.success());
      })
      .catch(() =>
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed())
      );
  }
  @Get(":id")
  getOgrenciById(@Res() res: Response, @Param("id") id: number) {
    if (!id) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json(ResultPackage.failed("Ne biçim sorgu lan bu"));
    }
    this.ogrs
      .findOgrenciByOgrId([id])
      .then(data => {
        console.log("idididididi", id);
        res.status(HttpStatus.OK).json(ResultPackage.success(data));
      })
      .catch(() =>
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed())
      );
  }
  @Get("ogrenci-no/:ogrNo")
  getOgrenciByOgrNo(@Res() res: Response, @Param("ogrNo") ogrNo: number) {
    if (!ogrNo || !lodash.isString(ogrNo)) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json(ResultPackage.failed("Ne biçim sorgu lan bu"));
    }
    this.ogrs
      .findOgrenciByOgrNo(ogrNo)
      .then(data => {
        res.status(HttpStatus.OK).json(ResultPackage.success(data.rows));
      })
      .catch(() =>
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed())
      );
  }
  @Delete("delete-ogrenci/:ogrNo")
  deleteOgrByOgrNo(@Res() res: Response, @Param("ogrNo") ogrNo: number) {
    if (!ogrNo || !lodash.isString(ogrNo)) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json(ResultPackage.failed("Ne biçim sorgu lan bu"));
    }
    this.ogrs
      .deleteOgrenciByOgrNo(ogrNo)
      .then(data => {
        res.status(HttpStatus.OK).json(ResultPackage.success(data));
      })
      .catch(() =>
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed())
      );
  }
  @Post("update/:ogrNo")
  updateOgrenciByOgrNo(
    @Res() res: Response,
    @Param("ogrNo") ogrNo: number,
    @Body() ogr: Ogrenci
  ) {
    this.ogrs
      .updateOgrenci(ogrNo, ogr)
      .then(() => {
        res.status(HttpStatus.OK).json(ResultPackage.success());
      })
      .catch(() => {
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }
}
