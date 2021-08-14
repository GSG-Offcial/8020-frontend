import React, { useState } from 'react';
import styles from './NftSiderbar.module.css';
import { Link } from 'react-router-dom';
import Group99 from '../../Icons/logo2.png';

export const NftSidebar = () => {
  const [height, setHeight] = useState('');

  setInterval(() => {
    setHeight(document.body.scrollHeight - 245 + 'px');
  }, 100);

  return (
    // <div>
    //     <h1>Hello World</h1>
    // </div>
    <div
      className={styles.nft_sidebar}
      style={{
        'min-height': height,
      }}
    >
      <div className={styles.nft_logo}>
        <Link to="/">
          <img src={Group99} alt="Group 900" />
        </Link>
      </div>
      <div>
        <ul className={styles.nft_siderbar_menu}>
          <li>
            <Link to="/dashboard">
              <a href="#/" className={styles.nft_active}>
                <span>
                  <i className="fas fa-chart-pie"></i>
                </span>{' '}
                <span>DashBoard</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/lottery">
              <a href="#/" className={styles.nft_active}>
                <span>
                  <i className="fas fa-ticket-alt"></i>
                </span>{' '}
                <span>Lottery</span>{' '}
              </a>
            </Link>
          </li>
          <li>
            <Link to="/nftPool">
              <a href="#/" className={styles.nft_active}>
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
