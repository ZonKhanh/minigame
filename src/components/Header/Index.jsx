import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCountdownModal } from '../CountdownModal/CountdownSlice';

import '../Header/Index.css';
import takashimayaLogo from '../../assets/img/general/logo.png';

const Header = () => {
  const dispatch = useDispatch();
  const reload = () => {
    window.location.reload();
  };
  const startGame = () => {
    dispatch(toggleCountdownModal(true));
  };
  return (
    <header className="header-site">
      <nav className="navbar">
        <div className="container header-item-list">
          <a href="#home-page" className="takashimaya-header-logo">
            <img src={takashimayaLogo} alt="Takashimaya-logo" onClick={reload}/>
          </a>
          <ul className="nav" id="header-navbar">
            <li className="nav-item">
              <a className="nav-link" onClick={startGame} href="#play-page">Play game</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#rules-page">Rules</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#prize-page">Prize</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#rank-page">Rank</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#setting-page">Setting</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;


