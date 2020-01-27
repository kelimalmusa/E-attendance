import { Module } from '@nestjs/common';
import { DenemeController } from './deneme/deneme.controller';
import { DatabaseModule } from 'src/database/database.module';
import { DenemeService } from './deneme/deneme.service';

@Module({
  controllers: [DenemeController],
  imports: [DatabaseModule],
  providers: [DenemeService]
})
export class DenemeModule { }
