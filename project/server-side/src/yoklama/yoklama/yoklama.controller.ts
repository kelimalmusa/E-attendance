import { Controller, Get, Res, Param, HttpStatus } from "@nestjs/common";
import { YoklamaService } from "./yoklama.service";
import { Response } from "express";
import { ResultPackage } from "src/common/result-package";

@Controller("yoklama")
export class YoklamaController {
  constructor(private yokSer: YoklamaService) {}
  @Get(":tarih")
  calc(@Res() res: Response, @Param("tarih") tarih: string) {
    this.yokSer
      .saveToYoklama(1, 2, true, tarih)
      .then(() => {
        res.status(HttpStatus.OK).json(ResultPackage.success());
      })
      .catch(() =>
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed())
      );
  }
}
