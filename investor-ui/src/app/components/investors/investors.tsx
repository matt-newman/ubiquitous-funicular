import React from "react";
import { displayMoneyAmount, useFetch } from "../../utils";

import './investors.css';

const API_ROOT = 'http://localhost:3000/api/';
const API_PATH = 'investors-data';
const apiUrl = `${API_ROOT}${API_PATH}`;

export function Investors({ setInvestorId, activeId=1 }: { setInvestorId: any, activeId:number }) {

  // TODO: load data from API, maybe via SWR?
  const { data, error } = useFetch(`${apiUrl}`);

  return (
    <div className="investors">
      {data && (
      <><h2>Investors</h2><table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>type</th>
              <th>date added</th>
              <th>country</th>
              <th>Total Commitment</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(row => {
              return (
                <tr key={row.id} onClick={() => setInvestorId(row.id)} className={activeId === row.id ? 'active' : 'not-active'}>
                  <td>{row.id}</td>
                  <td>{row.investor_name}</td>
                  <td>{row.investor_type}</td>
                  <td>{row.date_added}</td>
                  <td>{row.investor_country}</td>
                  <td>{displayMoneyAmount(row.total_amount)}</td>
                </tr>
              );
            })}
          </tbody>
        </table></>
      )}
    </div>
  );
}
