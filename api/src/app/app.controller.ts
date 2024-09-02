import { Controller, Get, Param } from '@nestjs/common';

import { DataAccessService } from 'data-access';

@Controller('investors')
export class InvestorsController {
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

@Controller('assets')
export class AssetsController {
  constructor(private readonly appService: DataAccessService) {}

  @Get()
  getAssets() {
    return this.appService.getAssets();
  }
}

@Controller('investor')
export class InvestorController {
  constructor(private readonly appService: DataAccessService) {}

  @Get(':id')
  getInvestor(@Param() params: any) {
    return this.appService.getInvestorCommitments(params.id);
  }
}