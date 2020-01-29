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

@Controller("tweet")
export class TweetController {
  constructor(private twes: TweetService) {}
  @Get("hashtag/:hashtag")
  getTweets(@Res() res: Response, @Param("hashtag") hastag: string) {
    this.twes
      .collectTweets(hastag)
      .then(data => {
        res.status(HttpStatus.OK).json(ResultPackage.success(data));
        data.forEach(element => {
          this.twes.saveTweets(element);
          // console.log(element);
        });
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
