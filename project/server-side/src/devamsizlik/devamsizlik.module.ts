import { Module } from "@nestjs/common";
import { DevamsizlikService } from "./devamsizlik/devamsizlik.service";
import { DevamsizlikController } from "./devamsizlik/devamsizlik.controller";
import { DatabaseModule } from "src/database/database.module";
import { TweetService } from "src/tweet/tweet/tweet.service";
import { TwitterService } from "src/twitter/twitter/twitter.service";

@Module({
  providers: [DevamsizlikService, TweetService, TwitterService],
  imports: [DatabaseModule],
  controllers: [DevamsizlikController]
})
export class DevamsizlikModule {}
