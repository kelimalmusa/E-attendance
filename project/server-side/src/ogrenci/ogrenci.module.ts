import { Module } from "@nestjs/common";
import { OgrenciService } from "./ogrenci/ogrenci.service";
import { OgrenciController } from "./ogrenci/ogrenci.controller";
import { DatabaseModule } from "src/database/database.module";
import { DersService } from "src/ders/ders/ders.service";
import { HocaService } from "src/hoca/hoca/hoca.service";
import { DevamsizlikService } from "src/devamsizlik/devamsizlik/devamsizlik.service";
import { TweetService } from "src/tweet/tweet/tweet.service";
import { TwitterService } from "src/twitter/twitter/twitter.service";
import { DersModule } from "src/ders/ders.module";
import { HocaModule } from "src/hoca/hoca.module";

@Module({
  providers: [OgrenciService, DersService, HocaService],
  imports: [DatabaseModule],
  controllers: [OgrenciController]
})
export class OgrenciModule {}
