import React from "react";
import { displayMoneyAmount, useFetch } from "../../utils";

import './commitment-totals.css'

export function CommitmentTotals({ data, setAssetType='' }: { data: any, setAssetType?: any }) {
    // slight duplication of effort, as there's also a query that does this, but now we have the data here already
    const output = data.reduce((prev: any, curr: any) => {
        if (!prev[curr.asset_class]) {
            prev[curr.asset_class] = 0;
        }

        prev.All += curr.amount;
        prev[curr.asset_class] += curr.amount;
        return prev;
    }, { All: 0 })

    return (
        <>
            {data && (
                <div className="totals">
                    {Object.keys(output).map((asset, index) => {
                        return (
                            <div key={index} className="totals--asset" onClick={()=>{ setAssetType(asset) }}>
                                <div className="totals--asset-name">{asset}</div>
                                <div className="totals--asset-amount">£{displayMoneyAmount(output[asset])}</div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    );
}
