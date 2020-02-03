import { Module } from "@nestjs/common";
import { DersController } from "./ders/ders.controller";
import { DersService } from "./ders/ders.service";
import { DatabaseModule } from "src/database/database.module";
import { HocaService } from "src/hoca/hoca/hoca.service";

@Module({
  providers: [DersService, HocaService],
  imports: [DatabaseModule],
  controllers: [DersController]
})
export class DersModule {}
