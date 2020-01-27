import { Module } from '@nestjs/common';
import { DatabaseService } from './service/database.service';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {
  constructor(private dbs: DatabaseService) {
    this.dbs.getPool();
  }
}
