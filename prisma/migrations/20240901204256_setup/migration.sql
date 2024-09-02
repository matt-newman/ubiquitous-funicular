-- CreateTable
CREATE TABLE "Investor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "investor_name" TEXT NOT NULL,
    "investor_type" TEXT NOT NULL,
    "investor_country" TEXT NOT NULL,
    "date_added" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Commitment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "investor_id" INTEGER NOT NULL,
    "asset_class" TEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "currency" TEXT NOT NULL,
    "date_updated" TEXT NOT NULL,
    CONSTRAINT "Commitment_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "Investor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Investor_investor_name_key" ON "Investor"("investor_name");
