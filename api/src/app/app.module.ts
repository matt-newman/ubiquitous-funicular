import { Module } from '@nestjs/common';

import { CommitmentController, InvestorController, InvestorsDataController } from './app.controller';
import { DataAccessModule, DataAccessService } from 'data-access';

@Module({
  imports: [DataAccessModule],
  controllers: [InvestorController, CommitmentController, InvestorsDataController],
  providers: [DataAccessService],
})
export class AppModule {}
