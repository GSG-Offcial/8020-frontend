import React from 'react';
import './LotterySideBar.css';
import Group99 from '../../Icons/Group 900.svg';
import { Link } from 'react-router-dom';
export const LotterySideBar = () => {
  const heigth = document.body.scrollHeight - 230 + 'px';

  return (
    <div
      className="lot_sidebar"
      style={{
        'min-height': heigth,
      }}
    >
      <div className="lot_logo">
        <Link to="/">
          <img src={Group99} alt="Group 900" />
        </Link>
      </div>
      <div>
        <ul className="lot_sidebar_menu">
          <li>
            <Link to="/dashboard">
              <a href="#/" className="lot-active">
                <span>
                  <i className="fas fa-chart-pie"></i>
                </span>{' '}
                <span>DashBoard</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/lottery">
              <a href="#/" className="lot-active">
                <span>
                  <i className="fas fa-ticket-alt"></i>
                </span>{' '}
                <span>Lottery</span>{' '}
              </a>
            </Link>
          </li>
          <li>
            <Link to="/nftPool">
              <a href="#/" className="lot-active">
                <span>
                  <i className="fas fa-dice-d20"></i>
                </span>{' '}
                <span>NFT Pool</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
