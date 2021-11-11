import React, { useState } from 'react';
import './LotterySideBar.css';
import Group99 from '../../Icons/logo2.png';
import { Link } from 'react-router-dom';
export const LotterySideBar = () => {
  const [height, setHeight] = useState('');

  setInterval(() => {
    setHeight(document.body.scrollHeight - 295 + 'px');
  }, 100);

  return (
    <div
      className="lot_sidebar"
      style={{
        'min-height': height,
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
                <span>
                  <small>Dashboard</small>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/nftPool">
              <a href="#/" className="lot-active">
                <span>
                  <i className="fas fa-dice-d20"></i>
                </span>{' '}
                <span>
                  <small>Access Pool</small>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/communityPool">
              <a href="#/" className="lot-active">
                <span>
                  <i className="fas fa-dice-d20"></i>
                </span>{' '}
                <span>
                  <small>Old Community</small>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/communityPoolNew">
              <a href="#/" className="lot-active">
                <span>
                  <i className="fas fa-dice-d20"></i>
                </span>{' '}
                <span>
                  <small>New Community</small>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/lottery">
              <a href="#/" className="lot-active">
                <span>
                  <i className="fas fa-ticket-alt"></i>
                </span>{' '}
                <span>
                  <small>Drop Lottery</small>
                </span>{' '}
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
