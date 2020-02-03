import { Module } from "@nestjs/common";
import { DevamsizlikService } from "./devamsizlik/devamsizlik.service";
import { DevamsizlikController } from "./devamsizlik/devamsizlik.controller";
import { DatabaseModule } from "src/database/database.module";
import { TweetService } from "src/tweet/tweet/tweet.service";
import { TwitterService } from "src/twitter/twitter/twitter.service";
import { OgrenciService } from "src/ogrenci/ogrenci/ogrenci.service";
import { OgrenciModule } from "src/ogrenci/ogrenci.module";
import { DatabaseService } from "src/database/service/database.service";
import { DersService } from "src/ders/ders/ders.service";
import { HocaService } from "src/hoca/hoca/hoca.service";

@Module({
  providers: [
    DevamsizlikService,
    TweetService,
    TwitterService,
    OgrenciService,
    DersService,
    HocaService
  ],
  imports: [DatabaseModule],
  controllers: [DevamsizlikController]
})
export class DevamsizlikModule {}
