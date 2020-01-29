import { Module } from "@nestjs/common";
import { DersController } from "./ders/ders.controller";
import { DersService } from "./ders/ders.service";
import { DatabaseModule } from "src/database/database.module";

@Module({
  providers: [DersService],
  imports: [DatabaseModule],
  controllers: [DersController]
})
export class DersModule {}
