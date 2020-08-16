import React from 'react';
import Header from './Components/Header2/Header';
import Products from './Components/Products2/Products';
import './App.css'

const products = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] }
]

const { pathname } = window.location;

const page = pathname === '/' ? 'Home' : 'Produtos'

console.log(page);
const App = () => {
  return (
    <section className='App'>
      <div className='header-links'><Header /></div>
      <h1 className='title'>{page}</h1>
      {page === 'Home' ? (
        <p className='home-description'>Essa é a home do site.</p>
        ) : (
        <div>
          {products.map(el => <Products key={el.nome} products={el} />)}
        </div>
      )}
    </section>
  );
}

export default App;