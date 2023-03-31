import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import '../styles.css'

function Placanje({podaci, postaviPodatke, postaviLog}) {
  const [placanje, postaviPlacanje] = useState('');

  const handlePlacanjeChange = (e) => {
    postaviPlacanje(e.target.value);
    postaviPodatke({ ...podaci,  placanje: e.target.value });
    postaviLog((prev) => `${prev}\nNacin placanja: ${e.target.value}`);
  }

  return (
    <Card>
    <h3>Način plaćanja</h3>
    <div className='nacinPlacanja'>
        <div className='placanje'>
      <label className='kartica' >
        <input
          className="checkbox-round"
          type="radio"
          value="Kartica"
          checked={placanje === "Kartica"}
          onChange={handlePlacanjeChange}
        />
        <span className="checkmark"></span>
        Kartica
      </label>
      </div>
      <div>
      <label className='pouzece'>
        <input
          className="checkbox-round"
          type="radio"
          value="Pouzece"
          checked={placanje === "Pouzece"}
          onChange={handlePlacanjeChange}
        />
        <span className="checkmark"></span>
        Pouzeće
      </label>
      </div>
    </div>
    </Card>
  );
}

export default Placanje;
