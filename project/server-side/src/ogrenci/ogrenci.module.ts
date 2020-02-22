import { Module } from "@nestjs/common";
import { OgrenciService } from "./ogrenci/ogrenci.service";
import { OgrenciController } from "./ogrenci/ogrenci.controller";
import { DatabaseModule } from "src/database/database.module";
import { DersService } from "src/ders/ders/ders.service";
import { HocaService } from "src/hoca/hoca/hoca.service";
import { YoklamaService } from "src/yoklama/yoklama/yoklama.service";
import { TwitterService } from "src/twitter/twitter/twitter.service";

@Module({
  providers: [
    OgrenciService,
    DersService,
    HocaService,
    YoklamaService,
    TwitterService
  ],
  imports: [DatabaseModule],
  controllers: [OgrenciController],
  exports: [OgrenciService]
})
export class OgrenciModule {}
