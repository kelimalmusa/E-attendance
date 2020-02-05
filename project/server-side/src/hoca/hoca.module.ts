import { Module } from "@nestjs/common";
import { HocaService } from "./hoca/hoca.service";
import { HocaController } from "./hoca/hoca.controller";
import { DatabaseService } from "src/database/service/database.service";
import { DatabaseModule } from "src/database/database.module";
import { DersService } from "src/ders/ders/ders.service";
import { OgrenciService } from "src/ogrenci/ogrenci/ogrenci.service";
import { TwitterService } from "src/twitter/twitter/twitter.service";
import { TweetService } from "src/tweet/tweet/tweet.service";
import { DevamsizlikService } from "src/devamsizlik/devamsizlik/devamsizlik.service";
import { DersModule } from "src/ders/ders.module";
import { OgrenciModule } from "src/ogrenci/ogrenci.module";

@Module({
  providers: [HocaService, DersService],
  imports: [DatabaseModule],
  controllers: [HocaController]
})
export class HocaModule {}
