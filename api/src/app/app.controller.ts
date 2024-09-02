import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('investors')
export class InvestorController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInvestors() {
    return this.appService.getInvestors();
  }
}

@Controller('commitments')
export class CommitmentController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCommitments() {
    return this.appService.getCommitments();
  }
}