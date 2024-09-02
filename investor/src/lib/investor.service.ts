import { Injectable } from '@nestjs/common'
import { PrismaClient, Commitment, Investor } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class InvestorService {
  public getInInvestors(): Promise<Investor[]> {
    return prisma.investor.findMany()
  }

  public getCommitments(): Promise<Commitment[]> {
    return prisma.commitment.findMany()
  }
}

