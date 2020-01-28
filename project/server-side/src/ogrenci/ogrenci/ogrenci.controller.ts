import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  Delete
} from "@nestjs/common";
import { OgrenciService } from "./ogrenci.service";
import { Response } from "express";
import { ResultPackage } from "src/common/result-package";
import * as lodash from "lodash";
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
  @Get(":id")
  getOgrenciById(@Res() res: Response, @Param("id") id: number) {
    console.log("-------------");
    if (!id || !lodash.isString(id)) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json(ResultPackage.failed("Ne biçim sorgu lan bu"));
    }
    this.ogrs
      .findOgrenciById(id)
      .then(data => {
        res.status(HttpStatus.OK).json(ResultPackage.success(data));
      })
      .catch(() =>
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed())
      );
  }
  @Get("ogrenci-no/:ogrNo")
  getOgrenciByOgrNo(@Res() res: Response, @Param("ogrNo") ogrNo: number) {
    console.log("-------------");
    if (!ogrNo || !lodash.isString(ogrNo)) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json(ResultPackage.failed("Ne biçim sorgu lan bu"));
    }
    this.ogrs
      .findOgrenciByOgrNo(ogrNo)
      .then(data => {
        res.status(HttpStatus.OK).json(ResultPackage.success(data));
      })
      .catch(() =>
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed())
      );
  }
  @Delete("delete-ogrenci/:ogrNo")
  deleteOgrByOgrNo(@Res() res: Response, @Param("ogrNo") ogrNo: number) {
    console.log("-------------");
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
}
