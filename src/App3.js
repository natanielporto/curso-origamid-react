import React, { useState } from 'react'
import Product from './Components/Product3/Product';
import './App.css'

const type = ['Tablet', 'Smartphone', 'Notebook']

const App = () => {
  
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleClick(event) {
    setLoading(true);
    
    const data = await fetch(`http://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
    
    const json = await data.json();
    
    setInfo(json);

    setLoading(false);
  }
  
  return (
    <>
    <div>
     {type.map(el => <button key={el} onClick={handleClick} className='btn'>{el}</button>)} 
    </div>
    <div>
      {loading && <p>Loading...</p>}
      {!loading && info && <Product info={info} />}
    </div>
    </>
  )
}

export default App
