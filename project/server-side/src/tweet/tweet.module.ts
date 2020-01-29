import { Module } from "@nestjs/common";
import { TweetService } from "./tweet/tweet.service";
import { TweetController } from "./tweet/tweet.controller";
import { DatabaseModule } from "src/database/database.module";
import { TwitterModule } from "src/twitter/twitter.module";
import { TwitterService } from "src/twitter/twitter/twitter.service";

@Module({
  providers: [TweetService, TwitterService],
  imports: [DatabaseModule, TwitterModule],
  controllers: [TweetController]
})
export class TweetModule {}
