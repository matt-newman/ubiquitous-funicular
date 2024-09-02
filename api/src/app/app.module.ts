import { Module } from '@nestjs/common';

import { CommitmentController, InvestorController } from './app.controller';
import { AppService } from './app.service';

import { InvestorModule } from 'investor';

@Module({
  imports: [InvestorModule],
  controllers: [InvestorController, CommitmentController],
  providers: [AppService],
})
export class AppModule {}
