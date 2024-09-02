// libs/products/src/lib/products.service.ts

import { Injectable } from '@nestjs/common'
import { PrismaClient, Investor, Commitment } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class AppService {
  public getInvestors(): Promise<Investor[]> {
    return prisma.investor.findMany()
  }

  public getCommitments(): Promise<Commitment[]> {
    return prisma.commitment.findMany()
  }
}