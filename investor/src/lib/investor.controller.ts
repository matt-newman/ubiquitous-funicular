import { Controller } from '@nestjs/common';
import { InvestorService } from './investor.service';

@Controller('Investor')
export class InvestorController {
  constructor(private InvestorService: InvestorService) {}
}
