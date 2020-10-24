import React, {useState} from 'react'

const products = ['Tablet', 'Smartphone', 'Notebook']

const App = () => {
  const [info, setInfo] = useState(null)
  const [wait, setWait] = useState(false)

  async function handleClick (event) {
    setWait(true)
    const clicked = event.target.innerText;

    const res = await fetch (`https://ranekapi.origamid.dev/json/api/produto/${clicked}`)

    const json = await res.json()

    setWait(false)
    setInfo(json)
  }
  
  return (
    <>
      <div>
        {products.map((el) => (
          <button style={{marginRight: '20px'}} onClick={handleClick} key={el}>
            {el}
          </button>
        ))}
      </div>
      {wait && <div>Aguarde...</div>}
      {info && !wait && (
        <div>
          <h1>{info.nome}</h1>
          <p>R$ {info.preco}</p>
          <img src={info.fotos[0].src} alt={info.fotos[0].alt}/>
        </div>
      )}
    </>
  );
}

export default App
