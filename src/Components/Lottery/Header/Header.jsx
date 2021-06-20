
import React, { Fragment } from 'react'
import './Header.css'
import { LotterySideBar, LotteryTopBox, Pick3Drop, StatisFourBox, Pick3Nub, BottomTwoBox, LotForm1, LotForm2, LotForm3, LotDesclaimer,LotBottomImage,FooterImages, Footer2} from '../index'

// import React from 'react';
// import './Header.css';

export const Header = () => {
  return (
    <Fragment>
      <div className="contianer-home" id="lotter-maindiv">
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

      </div>
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
