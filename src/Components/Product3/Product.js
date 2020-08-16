import React, { useState } from 'react'

const Product = ({ info }) => {
console.log(info);
  return (
    <>
      <h1>{info.nome}</h1>
      <p>R$ {info.preco}</p>
      <img src={info.fotos[0].src} alt={info.fotos[0].titulo} className='pic' />
    </>
  )
}

export default Product;
