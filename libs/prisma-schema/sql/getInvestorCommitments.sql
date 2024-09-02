SELECT id, asset_class, amount, currency FROM Commitment
    WHERE investor_id = :investorId;