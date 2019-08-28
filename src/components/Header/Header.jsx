import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

function Header({shopName}) {
  return(
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" width="48" />
      <h1 className="header__title">{shopName}</h1>
    </header>
  );
}

export default Header;