import { Controller, Get } from '@nestjs/common';

import { DataAccessModule, DataAccessService } from 'data-access';

@Controller('investors')
export class InvestorController {
  constructor(private readonly appService: DataAccessService) {}

  @Get()
  getInvestors() {
    return this.appService.getInvestors();
  }
}

@Controller('investors-data')
export class InvestorsDataController {
  constructor(private readonly appService: DataAccessService) {}

  @Get()
  getInvestorsData() {
    return this.appService.getInvestorsAndTotalCommitments();
  }
}



@Controller('commitments')
export class CommitmentController {
  constructor(private readonly appService: DataAccessService) {}

  @Get()
  getCommitments() {
    return this.appService.getCommitments();
  }
}