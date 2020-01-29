import { Module } from '@nestjs/common';
import { TwitterService } from './twitter/twitter.service';
import { TwitterController } from './twitter/twitter.controller';

@Module({
  providers: [TwitterService],
  controllers: [TwitterController]
})
export class TwitterModule {}
