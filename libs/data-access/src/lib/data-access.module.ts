import { Module } from '@nestjs/common';
import { DataAccessService } from './data-access.service';

@Module({
  controllers: [],
  providers: [DataAccessService],
  exports: [DataAccessService],
})
export class DataAccessModule {}
