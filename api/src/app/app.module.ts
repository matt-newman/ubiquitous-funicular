import { Module } from '@nestjs/common';

import { AssetsController, CommitmentController, InvestorsController, InvestorsDataController, InvestorController } from './app.controller';
import { DataAccessModule, DataAccessService } from 'data-access';

@Module({
  imports: [DataAccessModule],
  controllers: [InvestorsController, CommitmentController, InvestorsDataController, AssetsController, InvestorController],
  providers: [DataAccessService],
})
export class AppModule {}
