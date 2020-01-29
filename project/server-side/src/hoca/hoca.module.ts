import { Module } from "@nestjs/common";
import { HocaService } from "./hoca/hoca.service";
import { HocaController } from "./hoca/hoca.controller";
import { DatabaseService } from "src/database/service/database.service";
import { DatabaseModule } from "src/database/database.module";

@Module({
  providers: [HocaService],
  imports: [DatabaseModule],
  controllers: [HocaController]
})
export class HocaModule {}
