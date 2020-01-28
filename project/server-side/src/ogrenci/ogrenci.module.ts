import { Module } from "@nestjs/common";
import { OgrenciService } from "./ogrenci/ogrenci.service";
import { OgrenciController } from "./ogrenci/ogrenci.controller";
import { DatabaseModule } from "src/database/database.module";

@Module({
  providers: [OgrenciService],
  imports: [DatabaseModule],
  controllers: [OgrenciController]
})
export class OgrenciModule {}
