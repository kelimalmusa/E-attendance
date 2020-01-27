import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DenemeModule } from './deneme/deneme.module';

@Module({
  imports: [DatabaseModule, DenemeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
