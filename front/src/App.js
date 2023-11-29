import './App.css';
import React, { useState } from 'react'
import { getValue } from './components/value.jsx'


function ApiSelect() {
 
  const currencies = [

    { id: 'RUB', name: 'Russian Ruble' },
    { id: 'USD', name: 'US Dollar' },
    { id: 'EUR', name: 'Euro' },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
  };
  

  return (
    <div>
      <select value={selectedCurrency} onChange={handleChange}>
        {currencies.map((currency) => (
          <option key={currency.name} value={currency.id}>
            {currency.name} ({currency.id})
          </option>
        ))}
      </select>
    </div>
  );
}

export default ApiSelect;