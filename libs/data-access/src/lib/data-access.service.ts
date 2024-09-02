import { Injectable } from '@nestjs/common'
import { PrismaClient, Commitment, Investor } from '@prisma/client'
import { getInvestorsAndTotalCommitment, getInvestorCommitments, getAssets } from '@prisma/client/sql';

const prisma = new PrismaClient()

@Injectable()
export class DataAccessService {
  public getInvestors(): Promise<Investor[]> {
    return prisma.investor.findMany()
  }

  public getCommitments(): Promise<Commitment[]> {
    return prisma.commitment.findMany()
  }

  public getInvestorsAndTotalCommitments(): Promise<any[]> {
    return prisma.$queryRawTyped(getInvestorsAndTotalCommitment());
  }

  public getInvestorCommitments(investorId=1): Promise<any[]> {
    return prisma.$queryRawTyped(getInvestorCommitments(investorId));
  }

  public getAssets(): Promise<any[]> {
    return prisma.$queryRawTyped(getAssets());
  }
}
