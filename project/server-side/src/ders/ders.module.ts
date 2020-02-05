import { Module } from "@nestjs/common";
import { DersController } from "./ders/ders.controller";
import { DersService } from "./ders/ders.service";
import { DatabaseModule } from "src/database/database.module";
import { HocaService } from "src/hoca/hoca/hoca.service";
import { OgrenciService } from "src/ogrenci/ogrenci/ogrenci.service";
import { DevamsizlikService } from "src/devamsizlik/devamsizlik/devamsizlik.service";
import { TweetService } from "src/tweet/tweet/tweet.service";
import { TwitterService } from "src/twitter/twitter/twitter.service";
import { HocaModule } from "src/hoca/hoca.module";

@Module({
  providers: [
    DersService,
    HocaService,
  ],
  imports: [DatabaseModule,HocaModule],
  controllers: [DersController]
})
export class DersModule {}
