import Card from 'react-bootstrap/Card';
import '../styles.css'
import { useState } from 'react';

function Kontakt({podaci, postaviPodatke, postaviLog}){
    const [email, postaviEmail] = useState("Email adresa...");
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (e) => {
        postaviEmail(e.target.value);
        postaviPodatke({ ...podaci, email: e.target.value });
        postaviLog((prev) => `${prev}\nEmail: ${e.target.value}`);
       
        
    }
    const checekEmail= (e) => {
        const inputValue = e.target.value;
        postaviEmail(inputValue);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(e.target.value);
        setIsValidEmail(isValid);
    }

    const [broj, postaviBroj] = useState('');

    const handleBrojChange = (e) => {
        postaviBroj(e.target.value);
        postaviPodatke({ ...podaci, broj: e.target.value });
        postaviLog((prev) => `${prev}\nBroj: ${e.target.value}`);
    }
    
    return (
        <Card>
            <h3>Kontakt</h3>
            <div className='kontakt'>
                <div>
                    <label className='email' htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={checekEmail}
                        style={{ borderColor: isValidEmail ? 'initial' : 'red' }}
                    />
                    {!isValidEmail && <span style={{ color: 'red' }}>Invalid email format</span>}
                </div>

                <div className='input-container'>
                    <label className='broj-mobitela-natpis' htmlFor="Broj mobitela">Broj mobitela:</label>
                    <input
                        type="tel"
                        id='phone-number'
                        name="brojMobitela"
                        value={broj}
                        onChange={handleBrojChange}
                    />
                </div>
            </div>
        </Card>
    );
}
export default Kontakt;