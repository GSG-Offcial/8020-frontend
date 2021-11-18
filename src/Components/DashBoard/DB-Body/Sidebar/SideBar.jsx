import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Group99 from '../../../Icons/Group 900.svg';
import Group99 from '../../../Icons/logo2.png';
// import NFTIcon from '../../../Icons/icon-sidebar-NFT.svg'
// import Logo8090 from '../../../Logo/Group903.svg
import './SideBar.css';

export const SideBar = () => {
  const [height, setHeight] = useState('');

  setInterval(() => {
    setHeight(document.body.scrollHeight - 245 + 'px');
  }, 100);

  return (
    <div
      className="sidebar"
      style={{
        'min-height': height,
      }}
    >
      <div className="logo">
        <Link to="/">
          <img src={Group99} alt="Group 900" className="sidebar-icon" />
        </Link>
      </div>
      <div className="router-text">
        <ul className="sidebar-menu">
          <li>
            <a href="#/" className="active">
              <span>
                <i className="fas fa-chart-pie"></i>
              </span>{' '}
              <span>
                <small>Dashboard</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/" className="active">
              <span>
                <i className="fas fa-dice-d20"></i>
              </span>{' '}
              <span>
                <Link to="/nftPool">
                  <small>Access Pool</small>
                </Link>{' '}
              </span>
            </a>
          </li>
          <li>
            <a href="#/" className="active">
              <span>
                <i className="fas fa-dice-d20"></i>
              </span>{' '}
              <span>
                <Link to="/communityPool">
                  <small>Old Community </small>
                </Link>{' '}
              </span>
            </a>
          </li>
          <li>
            <a href="#/" className="active">
              <span>
                <i className="fas fa-dice-d20"></i>
              </span>{' '}
              <span>
                <Link to="/communityPoolNew">
                  <small>New Community </small>
                </Link>{' '}
              </span>
            </a>
          </li>
          <li>
            <a href="#/" className="active" id="Lottery">
              <span>
                <i className="fas fa-ticket-alt"></i>
              </span>{' '}
              <span>
                <Link to="/lottery">
                  <small>Drop Lottery</small>
                </Link>{' '}
              </span>{' '}
            </a>
          </li>
          {/* <li> */}
          <div class="dropdown">
     <button class="btn btn-secondary  button_dropDown" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
        <span>
                <i className="fas fa-dice-d20"></i>
              </span>{' '}    NFT Launched Paid
  </button>
  <ul class="dropdown-menu dropdown-menu-dark items_dropDown" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item" href="#">ART</a></li>
    <li><a class="dropdown-item" href="#">MUSIC</a></li>
    <li><a class="dropdown-item" href="#">SPORTS</a></li>
    <li><a class="dropdown-item" href="#">UTILITY</a></li>
  </ul>
</div>
          {/* </li> */}
        </ul>
      </div>
    </div>
  );
};
