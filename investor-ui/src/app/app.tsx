import React, { useState } from 'react';

import './app.module.css';

import { Investors } from './components/investors/investors';
import { Commitments } from './components/commitments/commitments'

export function App() {

  const [investor, setInvestor] = useState(1);

  return (
    <div>
      <Investors setInvestorId={setInvestor} />
      <Commitments investorID={investor} assetType='' />
    </div>
  );
}

export default App;
