import React from 'react';
import { Link } from 'react-router-dom';
import Group99 from '../../../Icons/Group 900.svg';
// import NFTIcon from '../../../Icons/icon-sidebar-NFT.svg'
// import Logo8090 from '../../../Logo/Group903.svg
import './SideBar.css';

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/">
          <img src={Group99} alt="Group 900" className="sidebar-icon" />
        </Link>
      </div>
      <div>
        <ul className="sidebar-menu">
          <li>
            <a href="#/" className="active">
              <span>
                <i className="fas fa-chart-pie"></i>
              </span>{' '}
              <span>DashBoard</span>
            </a>
          </li>
          <li>
              <a href="#/" className="active" id="Lottery">
                <span>
                  <i className="fas fa-ticket-alt"></i>
                </span>{' '}
                <span><Link to="/lottery">Lottery</Link> </span>{' '}
              </a>
          </li>
          <li>
            <a href="#/" className="active">
              <span>
                <i className="fas fa-dice-d20"></i>
              </span>{' '}
              <span>NFT Pool</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sidebar-bottom">
        <p className="sidebar-para">
          <span></span>
          <span>$16.271</span>
        </p>
      </div>
    </div>
  );
};
