import { Test } from '@nestjs/testing';
import { DataAccessService } from './data-access.service';

describe('DataAccessService', () => {
  let service: DataAccessService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DataAccessService],
    }).compile();

    service = module.get(DataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
