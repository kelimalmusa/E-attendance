import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { DenemeModule } from "./deneme/deneme.module";
import { OgrenciModule } from "./ogrenci/ogrenci.module";
import { HocaModule } from "./hoca/hoca.module";
import { DersModule } from './ders/ders.module';
import { TweetModule } from './tweet/tweet.module';
import { TwitterModule } from './twitter/twitter.module';
import { DevamsizlikModule } from './devamsizlik/devamsizlik.module';

@Module({
  imports: [DatabaseModule, DenemeModule, OgrenciModule, HocaModule, DersModule, TweetModule, TwitterModule, DevamsizlikModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
