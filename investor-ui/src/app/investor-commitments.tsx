import React, { useState } from "react";
import { displayMoneyAmount, useFetch } from "./utils";

const API_ROOT = 'http://localhost:3000/api/';
const API_PATH = 'investor';
const apiUrl = `${API_ROOT}${API_PATH}`;

export function InvestorCommitments({ investorID=1 }: { investorID: number }) {

  // TODO: load data from API, maybe via SWR?
  const { data, error } = useFetch(`${apiUrl}/${investorID}`);

  return (
    <>
      <h2>Investor Commitments</h2>
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
            {data?.map((row:any) => {
              const id = `commitmentId-${row.id}`;

              return (
                <tr key={id}>
                  <td>{row.id}</td>
                  <td>{row.asset_class}</td>
                  <td>{row.currency}</td>
                  <td>{displayMoneyAmount(row.amount)}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </>
  );
}
