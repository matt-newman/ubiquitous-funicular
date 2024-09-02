(BigInt.prototype as any).toJSON = function () {
    return Number(this)
};

export * from './lib/investor.controller';
export * from './lib/investor.service';
export * from './lib/investor.module';
