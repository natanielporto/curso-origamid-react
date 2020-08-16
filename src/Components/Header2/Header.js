import React from 'react'

const Header = () => {
  const pages = [{id: 1, name: 'Home', link: '/'}, {id: 2, name: 'Produtos', link: '/products'}];

  return (
    <>
      <ul>
        {pages.map((el) => (
          <li key={el.id}>
            <a href={el.link}>{el.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Header;
