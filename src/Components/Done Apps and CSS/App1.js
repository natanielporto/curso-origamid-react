import React from 'react';
import './App1.css'

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};


const App1 = () => {
  
  const dados = mario;
  const total = dados.compras.map(item => Number(item.preco.replace("R$ ", ""))).reduce((a, b) => a + b);
  
  
  const filmes = ['Before', 'After', 'Middle']
  
  const livros = [
    {nome: 'Game of', ano: 1996},
    {nome: 'Jaime of', ano: 2000},
    {nome: 'Maine of', ano: 2707}
  ]
  
  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];
  
  const listaProdutos = produtos.filter(el => Number(el.preco.replace("R$ ", "")) > 1500);

  return (
    <>
      <div className="App1">
        <h6>
          Exercício 1: trocar a cor da fonte e fazer aviso aparecer caso a
          pessoa esteja gastando demais.
        </h6>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>Situação: {dados.ativa ? "Ativa" : "Inativa"}</p>
        <p>
          Total:{" "}
          <span className={total <= 10000 ? `positivo` : `negativo`}>
            {total}
          </span>
        </p>
        <p>{total > 10000 && "Você está gastando muito"}</p>
        {total > 10000 && (
          <p className="negativo">Você está gastando demais.</p>
        )}
      </div>
      <h6>Exercício 2: fazer um .map nos filmes e mostrar todos.</h6>
      <ul>
        {filmes.map((el) => (
          <li id={el}>{el}</li>
        ))}
      </ul>

      <h6>
        Exercício 3: fazer um .map nos livros e mostrar somente os de um ano
        específico ou mais.
      </h6>
      <ul>
        {livros
          .filter((livros) => livros.ano > 2000)
          .map(({ nome, ano }) => (
            <li id={nome}>
              {nome}, {ano}
            </li>
          ))}
      </ul>
      <h6>
        Exercício 4: mostrar somente os produtos acima de 1500 e mostrar o style
        do background color. Categoria em h1, preço em h4, cores em lista com bg na cor.
      </h6>
        <ul>
        {listaProdutos.map(({id, nome, preco, cores}) => 
        <>
          <h1 id={id}>{nome}</h1>
          <h4 id={id}>Preço: {preco}</h4>
            <ul>
              {cores.map(el => 
                <li id={id} style={{backgroundColor: el, color: 'white'}}>{el}</li>
                )}
            </ul>
        </>
        )}
        </ul>
    </>
  );
}

export default App1;