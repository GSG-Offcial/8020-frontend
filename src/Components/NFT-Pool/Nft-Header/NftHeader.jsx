import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Nftheader.module.css'



export const NftHeader = () => {
    return (
        <div>
            {/* <h1>Hello world This NFT Pool</h1> */}
            <nav className={`navbar navbar-expand-md fixed-top ${styles.main_NavBar}`}>
        <div className={`container ${styles.nested_DivDB}`}>
          <a href="#/" className="navbar-brand">
            <span className="fw-bold display-6 text-white">Lottery</span>
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
                  <NavLink to="/dashboard" className="Nav_Link_lottery">DashBoard</NavLink>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link sidebar_text_lottery"
                  aria-current="page"
                  href="#/"
                >
                  <NavLink to="/lottery" className="Nav_Link_lottery">Lottery</NavLink>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link sidebar_text_lottery"
                  aria-current="page"
                  href="#/"
                >
                  <NavLink to="/NFT_Pool" className="Nav_Link_lottery">NFT Pool</NavLink>
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
              <a
                className="btn dashboard-btn1"
             
                href="#/"
              >
               Connect
              </a>
            </li>
            {/* second button on bigger screen */}
            <li className="nav-item ms-2 d-none d-md-inline">
              <a
                className="btn dashboard-btn2"
                href="#/"
              >
              Connect
              </a>
            </li>
          </div>
        </div>
      </nav>
        </div>
    )
}
