import React, { useState } from 'react';

import './app.module.css';

import { Investors } from './components/investors/investors';
import { Commitments } from './components/commitments/commitments'
import { useFetch } from './utils';

export function App() {

  const API_ROOT = 'http://localhost:3000/api/investors';
  const { data, error } = useFetch(`${API_ROOT}`);

  const [investor, setInvestor] = useState(1);

  return (
    <div>
      {!data && error && (
        <div className='error'>Error connecting to API: {error}</div>
      )}
      <Investors setInvestorId={setInvestor} activeId={investor} />
      <Commitments investorID={investor} />
    </div>
  );
}

export default App;
