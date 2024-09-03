import React, { useState } from "react";
import { displayMoneyAmount, useFetch } from "../../utils";
import { CommitmentTotals } from "../commitment-totals/commitment-totals";

const API_ROOT = 'http://localhost:3000/api/';
const API_PATH = 'investor';
const apiUrl = `${API_ROOT}${API_PATH}`;

export function Commitments({ investorID = 1 }: { investorID: number }) {

  // TODO: load data from API, maybe via SWR?
  const { data, error } = useFetch(`${apiUrl}/${investorID}`);

  const [assetType, setAssetType] = useState('');

  const filteredAssets = data?.filter(asset => {
    if ( assetType === 'All' ) {
      return true;
    }
    return assetType ? asset.asset_class === assetType : true;
  })

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className="commitments">
      {data && (
        <>
          <h2>Investor Commitments</h2>

          <CommitmentTotals data={data} setAssetType={setAssetType} activeAsset={assetType} />
          
          {filteredAssets.length < 1 && (
            <>No results!</>
          )}

          {filteredAssets.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>asset class</th>
                  <th>currency</th>
                  <th>amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssets?.map((row: unknown) => {
                  const id = `commitmentId-${row.id}`;
                  return (
                    <tr key={id}>
                      <td>{row.id}</td>
                      <td>{row.asset_class}</td>
                      <td>{row.currency}</td>
                      <td>{displayMoneyAmount(row.amount)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
}
