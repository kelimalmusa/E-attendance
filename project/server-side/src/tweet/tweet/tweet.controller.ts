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
import { TwitterService } from "src/twitter/twitter/twitter.service";

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
  constructor(
    private twes: TweetService,
    private devSer: DevamsizlikService,
    private twitterSer: TwitterService
  ) {}
  @Get(":hashtag")
  getTweets(@Res() res: Response, @Param("hashtag") hastag: string) {
    this.twes
      .collectTweets(hastag)
      .then(data => {
        res.status(HttpStatus.OK).json(ResultPackage.success(data));
      })

      .catch(() => {
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }
  @Get("fromdb/ogrenci/:id")
  getTweetsFromDbByOgrId(@Res() res: Response, @Param("id") ogrId: number) {
    this.twes
      .getTweetFromDBByOgrId([ogrId])
      .then(result => {
        res.status(HttpStatus.OK).json(ResultPackage.success(result));
      })
      .catch(() => {
        res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed());
      });
  }
  @Get("fromdb/ders/:id")
  getTweetsFromDbByDersId(@Res() res: Response, @Param("id") dersId: number) {
    this.twes
      .getTweetFromDBByDersId(dersId)
      .then(result => {
        res.status(HttpStatus.OK).json(ResultPackage.success(result));
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
