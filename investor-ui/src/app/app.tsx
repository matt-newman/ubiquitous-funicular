import React, { useState } from 'react';

import './app.module.css';

import { InvestorTable } from './investor-table';
import { InvestorCommitments } from './investor-commitments'

export function App() {

  const [investor, setInvestor] = useState(1);

  return (
    <div>
      <InvestorTable setInvestorId={setInvestor} />
      <InvestorCommitments investorID={investor} />
    </div>
  );
}

export default App;
