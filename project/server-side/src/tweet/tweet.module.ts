import { Module } from "@nestjs/common";
import { TweetService } from "./tweet/tweet.service";
import { TweetController } from "./tweet/tweet.controller";
import { DatabaseModule } from "src/database/database.module";
import { TwitterModule } from "src/twitter/twitter.module";
import { TwitterService } from "src/twitter/twitter/twitter.service";
import { DevamsizlikModule } from "src/devamsizlik/devamsizlik.module";
import { DevamsizlikService } from "src/devamsizlik/devamsizlik/devamsizlik.service";
import { OgrenciService } from "src/ogrenci/ogrenci/ogrenci.service";
import { DersService } from "src/ders/ders/ders.service";
import { HocaService } from "src/hoca/hoca/hoca.service";
import { YoklamaService } from "src/yoklama/yoklama/yoklama.service";

@Module({
  providers: [
    TweetService,
    TwitterService,
    DevamsizlikService,
    OgrenciService,
    DersService,
    HocaService,
    YoklamaService
  ],
  imports: [DatabaseModule, TwitterModule, DevamsizlikModule],
  controllers: [TweetController]
})
export class TweetModule {}
