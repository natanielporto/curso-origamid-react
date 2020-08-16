import React from 'react'

const Products = (props) => {
  const { nome, propriedades } = props.products;
  const [ram, hd] = propriedades;

  return (
    <div className='display'>
      <h2>{nome}</h2>
      <ul>
        <li>{ram}</li>
        <li>{hd}</li>
      </ul>
    </div>
  )
}

export default Products
