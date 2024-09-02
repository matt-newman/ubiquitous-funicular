import { Test } from '@nestjs/testing';
import { InvestorController } from './investor.controller';
import { InvestorService } from './investor.service';

describe('InvestorController', () => {
  let controller: InvestorController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [InvestorService],
      controllers: [InvestorController],
    }).compile();

    controller = module.get(InvestorController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
