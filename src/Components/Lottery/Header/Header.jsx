
import React, { Fragment } from 'react'
import './Header.css'
import { LotterySideBar, LotteryTopBox, Pick3Drop, StatisFourBox, Pick3Nub, BottomTwoBox, LotForm1, LotForm2, LotForm3, LotDesclaimer,LotBottomImage,FooterImages, Footer2} from '../index'

// import React from 'react';
// import './Header.css';

export const Header = () => {
  return (
    <Fragment>
      {/* <div className="contianer-home" id="lotter-maindiv">
        <div>
          <h1>
            <span className="badge header-heading">DashBoard</span>
          </h1>
        </div>

        <div>
          <ul className="nav justify-content-end" id="home-ul">
            <li className="nav-item" id="lottery-li">
              <a className="nav-link active simple-text" aria-current="page" href="#/">
                Dashboard
              </a>
            </li>
            <li className="nav-item" id="lottery-li2">
              <a className="nav-link active simle-id " aria-current="page" href="#/">
                Your spons ID: 0x02354309
              </a>
            </li>
            <li className="nav-item" id="lottery-li3">
              <a className="nav-link active copy-linkRef" aria-current="page" href="#/">
                Copy Ref. link
              </a>
            </li>
          </ul>
        </div>
        <div>
          <form class="d-flex">
            <input type="submit" value="Connect" className="lottery-btn" />
          </form>
        </div>

      </div> */}
      <nav className="navbar navbar-expand-md fixed-top lotter-maindiv">
        <div className="container  lot-nested-DivDB">
          <a href="#/" className="navbar-brand">
            <span className="fw-bold display-6 text-white">
              DashBoard
            </span>
          </a>
          {/* toggler button for mobile */}
          <button className="navbar-toggler lot-Icon-Navbar" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span><i className="fas fa-bars text-white"></i></span>
          </button>
          <div className="collapse navbar-collapse align-center justify-content-center lot-Link-div" id="main-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link lot-dashboard-text" aria-current="page" href="#/">DashBoard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link lot-id-Nub" href="#/">Your ID:1213345545</a>
              </li>
              <li className="nav-item">
                <a className="nav-link lot-db-copyRef" href="#/">Copy Ref.Link</a>
              </li>

            </ul>

          </div>
          {/* button if screen less than madium then show first othrwise second button */}
          <div className="collapse navbar-collapse  justify-content-end" id="main-nav">
            <li className="nav-item ms-2 d-md-none">
              <a className="btn lot-dashboard-btn1" href="#/">Connect</a>
            </li>
            {/* second button on bigger screen */}
            <li className="nav-item ms-2 d-none d-md-inline">
              <a className="btn lot-dashboard-btn2" href="#/">Connect</a>
            </li>
          </div>
        </div>


       
      </nav>


      <LotterySideBar />
      <LotteryTopBox />
      <Pick3Drop />
      <StatisFourBox />
      <Pick3Nub />
      <BottomTwoBox />
      <LotForm1 />
      <LotForm2 />
      <LotForm3 />
      <LotDesclaimer />
      <LotBottomImage/>
      <FooterImages/>
      <Footer2/>
    </Fragment>
  );
};
