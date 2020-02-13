import { Module } from "@nestjs/common";
import { YoklamaController } from "./yoklama/yoklama.controller";
import { YoklamaService } from "./yoklama/yoklama.service";
import { DatabaseService } from "src/database/service/database.service";
import { DatabaseModule } from "src/database/database.module";

@Module({
  providers: [YoklamaService],
  imports: [DatabaseModule],
  controllers: [YoklamaController]
})
export class YoklamaModule {}
