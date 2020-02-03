import { Module } from "@nestjs/common";
import { OgrenciService } from "./ogrenci/ogrenci.service";
import { OgrenciController } from "./ogrenci/ogrenci.controller";
import { DatabaseModule } from "src/database/database.module";
import { DersService } from "src/ders/ders/ders.service";
import { HocaService } from "src/hoca/hoca/hoca.service";

@Module({
  providers: [OgrenciService, DersService, HocaService],
  imports: [DatabaseModule],
  controllers: [OgrenciController]
})
export class OgrenciModule {}
