import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DenemeModule } from './deneme/deneme.module';
import { OgrenciModule } from './ogrenci/ogrenci.module';

@Module({
  imports: [DatabaseModule, DenemeModule, OgrenciModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
