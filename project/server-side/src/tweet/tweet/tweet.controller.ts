import {
  Controller,
  Get,
  Res,
  Param,
  HttpStatus,
  Post,
  Body
} from "@nestjs/common";
import { TweetService } from "./tweet.service";
import { Response } from "express";
import { ResultPackage } from "src/common/result-package";
import { Tweet } from "src/models/tweet";
import { DevamsizlikService } from "src/devamsizlik/devamsizlik/devamsizlik.service";
import { resolve } from "dns";

/**
 * 
 api/ders
   -- get liste
   -- post ekle (ders adı , hashtag)
  api/ders/5
    -- tekil getirir
  api/ders/5/devamsizlik-hesapla
    -- sonuç : öğrenci listesi (id name derse katıldı mı?)
 */


@Controller("tweet")
export class TweetController {
  constructor(private twes: TweetService, private devSer: DevamsizlikService) {}
  @Get(":hashtag")
  getTweets(@Res() res: Response, @Param("hashtag") hastag: string) {
    this.twes
      .collectTweets(hastag)
      .then(data => {
        res.status(HttpStatus.OK).json(ResultPackage.success(data));
        let average = this.twes.getAverage(data);
        data.forEach(element => {
          this.twes.saveToDevmasizlikTalbe(
            element,
            this.twes.controlLocation(element, average)
          );
        });

        // data.forEach(element => {
        //   this.twes.saveTweets(element);
        //   // console.log(element);
        // });
      })

      .catch(() => {
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }
  @Post()
  saveTweets(@Res() res: Response, @Body() body: Tweet) {
    this.twes
      .saveTweets(body)
      .then(() => {
        res.status(HttpStatus.OK).json(ResultPackage.success());
      })
      .catch(() => {
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }
}
