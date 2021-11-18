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
                <span>
                  <small>Dashboard</small>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <li>
              <Link to="/nftPool">
                <a href="#/" className={styles.nft_active}>
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
                <a href="#/" className={styles.nft_active}>
                  <span>
                    <i className="fas fa-dice-d20"></i>
                  </span>{' '}
                  <span>
                    <small>Old Community Pool</small>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/communityPoolNew">
                <a href="#/" className={styles.nft_active}>
                  <span>
                    <i className="fas fa-dice-d20"></i>
                  </span>{' '}
                  <span>
                    <small>New Community Pool</small>
                  </span>
                </a>
              </Link>
            </li>
            <Link to="/lottery">
              <a href="#/" className={styles.nft_active}>
                <span>
                  <i className="fas fa-ticket-alt"></i>
                </span>{' '}
                <span>
                  <small>Drop Lottery</small>
                </span>{' '}
              </a>
            </Link>
            <div class="dropdown">
  <button className={`btn btn-secondary  ${styles.button_dropDown_nftSidebarCom}`} type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
  <span>
                <i className={`fas fa-dice-d20 ${styles.ion_dropDownCom}`}></i>
              </span>{' '}    
              NFT Launched Paid
  </button>
  <ul className={`dropdown-menu dropdown-menu-dark ${styles.items_dropDown_NftSidebarCom}`} aria-labelledby="dropdownMenuButton2">
    <li><a className={`${styles.dropdown_item_nftsidebarCom}`} href="#">ART</a></li>
    <li><a className={`${styles.dropdown_item_nftsidebarCom}`} href="#">MUSIC</a></li>
    <li><a className={`${styles.dropdown_item_nftsidebarCom}`} href="#">SPORTS</a></li>
    <li><a className={`${styles.dropdown_item_nftsidebarCom}`} href="#">UTILITY</a></li>
  </ul>
</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
