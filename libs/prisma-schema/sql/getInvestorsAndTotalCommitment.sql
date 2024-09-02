SELECT Investor.id, investor_name, investor_type, date_added, asset_class, investor_country, SUM(amount) FROM Investor
    INNER JOIN Commitment on Investor.id = Commitment.investor_id
        GROUP BY Investor.id;