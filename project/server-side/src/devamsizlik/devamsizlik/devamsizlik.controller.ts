import { Controller, Get, Res, Param, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { ResultPackage } from "src/common/result-package";
import { TwitterService } from "src/twitter/twitter/twitter.service";
import { DevamsizlikService } from "./devamsizlik.service";

@Controller("devamsizlik")
export class DevamsizlikController {
  constructor(
    private twitterSer: TwitterService,
    private devSer: DevamsizlikService
  ) {}
  @Get(":hashtag")
  getAttendance(@Res() res: Response, @Param("hashtag") hashtag: string) {
    this.devSer
      .getAttendance(hashtag)
      .then(result => {
        // result.forEach(element => {
        //   // if (element.geo) this.devSer.saveToDevmasizlikTalbe(element);
        // });
        res.status(HttpStatus.OK).json(ResultPackage.success(result));
      })
      .catch(() => {
        res.status(HttpStatus.OK).json(ResultPackage.failed());
      });
  }
  @Get("ders/:ders")
  getAttendanceByDers(@Res() res: Response, @Param("ders") dersId: number) {
    this.devSer
      .getAttendanceByDers(dersId)
      .then(result => {
        res.status(HttpStatus.OK).json(ResultPackage.success(result));
      })
      .catch(() => {
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }

  // @Get(":hashtag")
  // getAttendance(@Res() res: Response, @Param("hashtag") id: number) {
  //   this.devSer
  //     .getAttendanceByDersId(id)
  //     .then(result => {
  //       // result.forEach(element => {
  //       //   // if (element.geo) this.devSer.saveToDevmasizlikTalbe(element);
  //       // });
  //       res.status(HttpStatus.OK).json(ResultPackage.success(result));
  //     })
  //     .catch(() => {
  //       res.status(HttpStatus.OK).json(ResultPackage.failed());
  //     });
  // }
}
