import React from 'react';
// eslint-disable-next-line
import styles from './app.module.css';

import { InvestorTable } from './investor-table';
import { InvestorCommitments } from './investor-commitments'

export function App() {
  return (
    <div>
      <InvestorTable />
      <InvestorCommitments investor={1} />
    </div>
  );
}

export default App;
