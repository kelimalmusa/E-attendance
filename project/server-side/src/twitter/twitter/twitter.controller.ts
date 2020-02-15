import { Controller, Get, Res, Param, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { TwitterService } from "./twitter.service";
import { ResultPackage } from "src/common/result-package";

@Controller("twitter")
export class TwitterController {
  constructor(private twitterSer: TwitterService) {}
  @Get(":name")
  hello(@Res() res: Response, @Param("name") name: string) {
    this.twitterSer.findUserId(name).then(result => {
      res.status(HttpStatus.OK).json(ResultPackage.success(result));
    });
  }
}
