import Card from 'react-bootstrap/Card';
import '../styles.css'
import { useState } from 'react';



function Adresa ({podaci, postaviPodatke, postaviLog}){

    const [ime, postaviIme] = useState("");

    const handleImeChange = (e) => {
        postaviIme(e.target.value);
        postaviPodatke({ ...podaci, ime: e.target.value });
        postaviLog((prev) => `${prev}\nIme i Prezime: ${e.target.value}`);
        
      }
      
      const options = ["Hrvatska", "Bosna i Hercegovina", "Srbija", "Slovenija", "Austrija", "Njemačka","Mađarska"];
      const [drzava, postaviDrzavu] = useState(options[0]);
      
      const handleDrzavaChange = (e) => {
         const value = e.target.value;
         postaviDrzavu(value);
         postaviPodatke({ ...podaci, drzava: value });
         postaviLog((prev) => `${prev}\nDrzava: ${e.target.value}`);

  }

      const [adresa, postaviAdresu] = useState("");

      const handleAdresaChange = (e) => {
        postaviAdresu(e.target.value);
        postaviPodatke({ ...podaci, adresa: e.target.value });
        postaviLog((prev) => `${prev}\nAdresa: ${e.target.value}`);
      }

      const [postanskiBroj, postaviPostaskiBroj] = useState("");

      const handlePostanskiBrojChange = (e) => {
        postaviPostaskiBroj(e.target.value);
        postaviPodatke({ ...podaci, postanskiBroj: e.target.value });
        postaviLog((prev) => `${prev}\nPostanski broj: ${e.target.value}`);
      }

    

    return(
        <Card>
            <h3>Adresa</h3>
            <div className='ime-prezime'>
                <label className='ime-natpis'>Ime i Prezime:</label>
                <input  type="text" 
                        id="ime" 
                        value={ime}
                        onChange={handleImeChange} 
                        maxLength={22} />
            <form>
                <p className='drzava-natpis'>Država:</p>
                <select
              className='drzava'
              value={drzava} 
            onChange={handleDrzavaChange}>
         {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
         ))}
      </select>
      
    </form>
      <p className='adresa-natpis'>Adresa:</p>
      <input className='adresa'
             type="text" 
             id="adresa" 
             maxLength={40}
             value={adresa}
             onChange={handleAdresaChange} />
      <p className='poštanski-natpis'>Poštanski broj:</p>
      <input className='adresa'
             type="text" 
             id="adresa"
             value={postanskiBroj}
             onChange={handlePostanskiBrojChange}
             maxLength={5} />
    </div>
    
        </Card>

    );
}
export default Adresa;

