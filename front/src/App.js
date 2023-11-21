import React from 'react';
import './Table.css';


const fetchData = async () => {
  const response = await fetch('http://data.fixer.io/api/latest?access_key=5433ed3d046ec4bb883929eae9afb687&symbols=USD,AUD,CAD,PLN,MXN&format=1');
  const data = await response.json();
  return data;
};

const DataList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li>{item.rates}</li>
      ))}
    </ul>
  );
};

function App() {
  const fetchAndDisplayData = async () => {
    const data = await fetchData();
    return <DataList data={data} />;
  };
  const mas = [
    { currency: 'EUR/RUB', rate: '90.00'},
    { currency: 'USD/RUB', rate: '75.00'},
    { currency: 'GBP/RUB', rate: '100.00'},
  ];

  return (
    <div>
      <h1>Convert currency</h1>
      <label className='choose'>
        Base currency: {' '}
        <select>
          <option value = "RUB">RUB</option>
          <option value = "EUR">EUR</option>
        </select>
        <button>Convert</button>
      </label>
      <table className="table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {mas.map(item => (
            <tr>
              <td>{item.currency}</td>
              <td>{item.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <label>Amount From To</label>
      </div>
      <div>
        <button onClick={fetchAndDisplayData}>Fetch and Display Data</button>
      </div>
    </div>
    
  );
}

export default App;