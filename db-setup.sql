CREATE TABLE IF NOT EXISTS investors (
	id INTEGER UNIQUE PRIMARY KEY,
   	investor_name TEXT UNIQUE NOT NULL,
	investor_type TEXT,
    investor_country TEXT,
    date_added TEXT,
);

CREATE TABLE IF NOT EXISTS commitments (
	id INTEGER UNIQUE PRIMARY KEY,
    investor_id INTEGER NOT NULL,
   	asset_class TEXT NOT NULL,
	amount INTEGER NOT NULL,
    currency TEXT NOT NULL,
    date_updated TEXT,
	FOREIGN KEY (investor_id)
       REFERENCES investors (id) 
);

INSERT INTO investors (investor_name, investor_type, investor_country, date_added) SELECT DISTINCT "Investor Name", "Investory Type", "Investor Country", "Investor Date Added" FROM rawdata;

INSERT INTO commitments (investor_id, asset_class, amount, currency, date_updated) 
    SELECT 1, "Commitment Asset Class", "Commitment Amount", "Commitment Currency", "Investor Last Updated" FROM rawdata
        WHERE "Investor Name" = "Ioo Gryffindor fund";

INSERT INTO commitments (investor_id, asset_class, amount, currency, date_updated) 
    SELECT 2, "Commitment Asset Class", "Commitment Amount", "Commitment Currency", "Investor Last Updated" FROM rawdata
        WHERE "Investor Name" = "Ibx Skywalker ltd";

INSERT INTO commitments (investor_id, asset_class, amount, currency, date_updated) 
    SELECT 3, "Commitment Asset Class", "Commitment Amount", "Commitment Currency", "Investor Last Updated" FROM rawdata
        WHERE "Investor Name" = "Cza Weasley fund";

INSERT INTO commitments (investor_id, asset_class, amount, currency, date_updated) 
    SELECT 4, "Commitment Asset Class", "Commitment Amount", "Commitment Currency", "Investor Last Updated" FROM rawdata
        WHERE "Investor Name" = "Mjd Jedi fund";