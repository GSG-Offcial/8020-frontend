import React,{Fragment} from 'react'
import { NavLink } from 'react-router-dom';
import  './MusicHeader.css'

export const MusicHeader = () => {
    return (
        <Fragment>
             <nav className="navbar navbar-expand-md fixed-top main-NavBar">
        <div className="container nested-DivDB">
          <a href="#/" className="navbar-brand">
            <span className={`fw-bold display-6 text-white `}>DashBoard</span>
          </a>
          {/* toggler button for mobile */}
          <button
            className="navbar-toggler Icon-Navbar"
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
          <div
            className="collapse navbar-collapse align-center justify-content-center Link-div"
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link sidebar_text"
                  aria-current="page"
                  href="#/"
                >
                  <NavLink to="/dashboard" className="Nav_Link">
                    GS50: ${Number().toFixed(2)}
                  </NavLink>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link sidebar_text"
                  aria-current="page"
                  href="#/"
                >
                  <NavLink to="/lottery" className="Nav_Link">
                    Lottery
                  </NavLink>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link sidebar_text"
                  aria-current="page"
                  href="#/"
                >
                  <NavLink to="/nftPool" className="Nav_Link">
                    Access Pool
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link sidebar_text"
                  aria-current="page"
                  href="#/"
                >
                  <NavLink to="/communityPool" className="Nav_Link">
                    Old Community Pool
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link sidebar_text"
                  aria-current="page"
                  href="#/"
                >
                  <NavLink to="/communityPoolNew" className="Nav_Link">
                    New Community Pool
                  </NavLink>
                </a>
              </li>
              <div class="dropdown">
     <button class="btn btn-secondary  HeaderSectionResponsive button_dropDown" type="button" id="dropdownMenuButton2 " data-bs-toggle="dropdown" aria-expanded="false">
        <span>
                <i className="fas fa-dice-d20"></i>
              </span>{' '}    NFT Launched Paid
  </button>
  <ul class="dropdown-menu dropdown-menu-dark items_dropDown" aria-labelledby="dropdownMenuButton2">
     <li><a class="dropdown-item" href="#">ART</a></li>
      <li><a class="dropdown-item" href="#"><NavLink to="/dashboard/music">MUSIC</NavLink> </a></li>
    <li><a class="dropdown-item" href="#">SPORTS</a></li>
    <li><a class="dropdown-item" href="#">UTILITY</a></li>
  </ul>
    </div>
              <li className="nav-item">
                <a
                  className="nav-link dashboard-text"
                  aria-current="page"
                  href="#/"
                >
                  GS50: ${Number().toFixed(2)}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link id-Nub">
                  Your Referral :
                  {/* {`${refAddress.substring(0, 6)}...${refAddress.substring(
                    refAddress.length - 4
                  )} `} */}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link db-copyRef"
                //   onClick={copyToClipboard}
                  href="#/"
                >
                  Copy Ref.Link
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
                onClick={(e) => {
                  e.preventDefault();
                //   setActivatingConnector(injected);
                //   activate(injected);
                }}
                href="#/"
              >
                {/* {account === undefined
                  ? 'Connect'
                  : account === null
                  ? 'None'
                  : `${account.substring(0, 6)}...${account.substring(
                      account.length - 4
                    )}`} */}
              </a>
            </li>
            {/* second button on bigger screen */}
            <li className="nav-item ms-2 d-none d-md-inline">
              <a className="btn dashboard-btn3 " href="#/">
                {/* {chainName} */}
                {/* dashboard-btn3 */}
              </a>
            </li>
            <li className="nav-item ms-2 d-none d-md-inline">
              <a
                className="btn dashboard-btn2"
                onClick={(e) => {
                  e.preventDefault();
                //   setActivatingConnector(injected);
                //   activate(injected);
                }}
                href="#/"
              >
                {/* {account === undefined
                  ? 'Connect'
                  : account === null
                  ? 'None'
                  : `${account.substring(0, 6)}...${account.substring(
                      account.length - 4
                    )}`} */}
                    Connect
              </a>
            </li>
          </div>
        </div>
      </nav>
        </Fragment>
    )
}
