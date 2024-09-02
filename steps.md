

## database setup:
brew install sqlite

quick look at data, assuming the following setup:

```
Investors:
    id - pk autoinc
    Name
    Type
    Country
    Date Added

Commitments:
    id - pk autoinc
    investorId - fk Investor.id
    Asset Class
    Amount
    Currency
```

Ioo Gryffindor fund,fund manager,Singapore,2000-07-06,2024-02-21,Infrastructure,15000000,GBP
Ibx Skywalker ltd,asset manager,United States,1997-07-21,2024-02-21,Infrastructure,31000000,GBP

thinking about using NextJs, would actually cover the whole app requirements, but could also use NestJs + custom MFEs

... some of the work should be done as stored procs, so that data over wire is smaller and calc time is faster

Run the db-setup.sql from the commandline:

`sqlite3 preqin < db-setup.sql`

might need: `PRAGMA foreign_keys = ON;`

```
sqlite3
sqlite> .mode csv
sqlite> .import ~/path-to-project/data.csv rawdata
sqlite> SELECT * FROM preqin;
```

the following imported the raw data and verified its existence in the preqin table

```
"Investor Name" TEXT, 
"Investory Type" TEXT, 
"Investor Country" TEXT, 
"Investor Date Added" TEXT,
"Investor Last Updated" TEXT, 
"Commitment Asset Class" TEXT, 
"Commitment Amount" TEXT, 
"Commitment Currency" TEXT
```

`SELECT DISTINCT "Investor Name" FROM preqin;`
returns:
```
"Ioo Gryffindor fund"
"Ibx Skywalker ltd"
"Cza Weasley fund"
"Mjd Jedi fund"
```

a similar check for date added and last updated, shows there's no difference in those date-times, so they're a little pointless, they could live on either table

## Application:
with all data done, thinking about BE & FE setup, if this was the full extent of the app, I'd use NextJS and everything could be done in a small monolith, but the tech requirements suggest a BE service, and MFEs, so I'll do that in a monorepo instead, probably using nx, nest, vite ... or course in a larger setup, I'd keep the BE & FE projects seperate, but there's not gain from doing that

`npx nx@latest init`
`npm install -D @nrwl/nest`
`nx generate @nrwl/nest:application api`

Quick test:
`nx serve api`
go to http://localhost:3000/api/ -> should get "hello world"

To run DB setup:
`npx prisma migrate dev`

http://localhost:3000/api/investors should list investors
http://localhost:3000/api/commitments should list commitments
http://localhost:3000/api/investors-data
http://localhost:3000/api/assets
http://localhost:3000/api/investor/1

Created a simple frontend app
`nx g @nx/react:app investor-ui --bundler=vite`