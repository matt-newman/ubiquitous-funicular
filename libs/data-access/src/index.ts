// because otherwise nest chokes on Parsing BigInt
(BigInt.prototype as any).toJSON = function () {
    return Number(this)
};

export * from './lib/data-access.service';
export * from './lib/data-access.module';
