import { Module } from "@nestjs/common";
import { HocaService } from "./hoca/hoca.service";
import { HocaController } from "./hoca/hoca.controller";
import { DatabaseService } from "src/database/service/database.service";
import { DatabaseModule } from "src/database/database.module";
import { DersService } from "src/ders/ders/ders.service";


@Module({
  providers: [HocaService, DersService],
  imports: [DatabaseModule],
  controllers: [HocaController]
})
export class HocaModule {}
