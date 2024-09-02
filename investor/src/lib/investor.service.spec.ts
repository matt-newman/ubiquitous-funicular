import { Test } from '@nestjs/testing';
import { InvestorService } from './investor.service';

describe('InvestorService', () => {
  let service: InvestorService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [InvestorService],
    }).compile();

    service = module.get(InvestorService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
