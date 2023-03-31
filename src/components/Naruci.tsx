import Card from 'react-bootstrap/Card';
import '../styles.css'
import React, { useState } from 'react';


function Naruci(){

    const [narudba, postaviNarudbu] = useState(false);

  const handleCheckboxChange = () => {
    postaviNarudbu(!narudba);
    
  };
  function handleOrder() {
  if (!narudba) {
    alert("Molimo prihvatite uvjete kako biste izvršili narudžbu!");
    return;
  }
  
}

    return(
        <Card>
            <div className='narudba'>
            <label >
      <input 
        className='checkbox-square'
        type="checkbox"
        checked={narudba}
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
         Prihvaćam uvjete narudžbe
    </label>
    </div>
   
        </Card>
    )
}

export default Naruci;