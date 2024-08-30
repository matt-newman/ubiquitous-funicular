SELECT * FROM investors;

-- 1,"Ioo Gryffindor fund","fund manager",Singapore,2000-07-06,
-- 2,"Ibx Skywalker ltd","asset manager","United States",1997-07-21,
-- 3,"Cza Weasley fund","wealth manager","United Kingdom",2002-05-29,
-- 4,"Mjd Jedi fund",bank,China,2010-06-08,

SELECT count(*) FROM commitments;
-- 300

-- investor_name, investor_type
-- investor_id, asset_class, amount, currency

SELECT DISTINCT asset_class FROM commitments;
-- Infrastructure
-- "Hedge Funds"
-- "Private Equity"
-- "Natural Resources"
-- "Private Debt"
-- "Real Estate"

SELECT asset_class, SUM(amount) as total_amount FROM commitments GROUP BY asset_class;
-- "Hedge Funds",2102000000
-- Infrastructure,2020000000
-- "Natural Resources",2506000000
-- "Private Debt",2431000000
-- "Private Equity",2551000000
-- "Real Estate",2325000000

SELECT investors.id, investor_name, investor_type, asset_class, SUM(amount) FROM investors
    INNER JOIN commitments on investors.id = commitments.investor_id
        GROUP BY investors.id;
-- 1,"Ioo Gryffindor fund","fund manager",Infrastructure,3492000000
-- 2,"Ibx Skywalker ltd","asset manager",Infrastructure,3930000000
-- 3,"Cza Weasley fund","wealth manager","Hedge Funds",2430000000
-- 4,"Mjd Jedi fund",bank,"Private Equity",4083000000

