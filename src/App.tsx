import Card from 'react-bootstrap/Card';
import './App.css'
import Kontakt from './components/Kontakt';
import Adresa from './components/Adresa';
import { useState,  useEffect} from 'react';
import Placanje from './components/Placanje';


function App() {

  const [podaci, postaviPodatke] = useState({
    email: "",
    broj: "",
    ime: "",
    prezime: "",
    drzava: "",
    adresa: "",
    postanskiBroj: "",
    placanje: ""
  });
  

  const [logText, setLogText] = useState('');

  useEffect(() => {
    const storedLogText = localStorage.getItem('logText');
    if (storedLogText) {
      setLogText(storedLogText);
    }
  }, []);

  const handleButtonClick = () => {
    const newLogText = `Email: ${podaci.email}\nMobitel: ${podaci.broj}\nIme i Prezime:  ${podaci.ime}\nDrzava: ${podaci.drzava}\nAdresa: ${podaci.adresa}\nPostanski broj: ${podaci.postanskiBroj}\nNačin plaćanja: ${podaci.placanje}`;
    localStorage.setItem('logText', newLogText);
    setLogText(newLogText);
    handleOrder();
  };
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
    
  return (
<Card  style={{backgroundColor:' #57C5B6', padding: '20px' , borderRadius:'15px', width:'700px' }}>
  <h3 className='naslov'>Račun --> Plačanje</h3>
  
  <form >
      <Kontakt postaviPodatke={postaviPodatke} podaci={podaci} />
      <Adresa postaviPodatke={postaviPodatke} podaci={podaci}/>
      <Placanje postaviPodatke={postaviPodatke} podaci={podaci}/>
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
      <div className='naruci'>
      <button  onClick={handleButtonClick} >Naruči</button>
      </div>
      {logText && (
        <div className='ispis'>
          <p>{logText}</p>
        </div>
         )}
    </form>
   

</Card>

  );
      
}

export default App
