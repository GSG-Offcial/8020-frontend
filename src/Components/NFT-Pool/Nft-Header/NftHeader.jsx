import React from 'react'
import { Fragment } from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Nftheader.module.css'

// Import Comp
import {NftSidebar,MintToken,FiveNFTBox,NFTTable, NFTDesc,NFTBottomImage, NFTFotter,NFTLastFooter, YourReward} from '../index'



export const NftHeader = () => {
    return (
        <Fragment>
            {/* <h1>Hello world This NFT Pool</h1> */}
            <nav className={`navbar navbar-expand-md fixed-top ${styles.main_NavBar}`}>
        <div className={`container ${styles.nested_DivDB}`}>
          <a href="#/" className="navbar-brand">
            <span className="fw-bold display-6 text-white">DashBoard</span>
          </a>
          {/* toggler button for mobile */}
          <button
            className={`navbar-toggler ${styles.Icon_Navbar_nft}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fas fa-bars text-white"></i>
            </span>
          </button>
{/* Link_div_nft */}
          <div
            className={`collapse navbar-collapse align-center justify-content-center ${styles.Link_div_nft}`}
            id="main-nav"
          >
            <ul className="navbar-nav">

              <li className="nav-item">
{/*  */}
                <a
                  className={`nav-link ${styles.sidebar_text_nft}`}
                  aria-current="page"
                  href="#/"
                >
                  {/* Nav_Link_lottery */}
                  <NavLink to="/dashboard" className={styles.Nav_Link_nft}>DashBoard</NavLink>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link sidebar_text_lottery"
                  aria-current="page"
                  href="#/"
                >
                  <NavLink to="/lottery" className={styles.Nav_Link_nft}>Lottery</NavLink>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link sidebar_text_lottery"
                  aria-current="page"
                  href="#/"
                >
                  <NavLink to="/nftPool" className={styles.Nav_Link_nft}>NFT Pool</NavLink>
                </a>
              </li>
              </ul>
              </div>

          {/* button if screen less than madium then show first othrwise second button */}
          <div
            className="collapse navbar-collapse  justify-content-end"
            id="main-nav"
          >
            <li className="nav-item ms-2 d-md-none">
              {/* nft_btn1 */}
              <a
                className={`btn ${styles.nft_btn1}`}
             
                href="#/"
              >
               Connect
              </a>
            </li>
            {/* second button on bigger screen */}
            <li className="nav-item ms-2 d-none d-md-inline">
              <a
                className={`btn ${styles.nft_btn2}`}
                href="#/"
              >
              Connect
              </a>
            </li>
          </div>
        </div>
      </nav>
      <NftSidebar/>
      <MintToken/>
      <FiveNFTBox/>
      <YourReward/>
      <NFTTable/>
      <NFTDesc/>         
      <NFTBottomImage/>
      <NFTFotter/>
      <NFTLastFooter/>
        </Fragment>
    )
}
