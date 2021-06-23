import React, { Fragment, useState, useEffect } from 'react';
import './Header.css';
import {
  LotterySideBar,
  LotteryTopBox,
  Pick3Drop,
  StatisFourBox,
  Pick3Nub,
  BottomTwoBox,
  LotForm1,
  LotForm2,
  LotForm3,
  LotDesclaimer,
  LotBottomImage,
  FooterImages,
  Footer2,
} from '../index';
import { useEagerConnect, useInactiveListener } from '../../../Hooks/index';
import { injected } from '../../../connectors';
import { useWeb3React } from '@web3-react/core';

export const Header = () => {
  const context = useWeb3React();
  const { connector, account, library, activate, error } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState();

  useEffect(() => {
    console.log('running');
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const connected = injected === connector;

  return (
    <Fragment>
      {/* navbar */}
      <nav className="navbar navbar-expand-md fixed-top main-NavBar">
        <div className="container nested-DivDB">
          <a href="#/" className="navbar-brand">
            <span className="fw-bold display-6 text-white">DashBoard</span>
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
                  className="nav-link dashboard-text"
                  aria-current="page"
                  href="#/"
                >
                  Lottery
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
                  setActivatingConnector(injected);
                  activate(injected);
                }}
                href="#/"
              >
                {account === undefined
                  ? 'Connect'
                  : account === null
                  ? 'None'
                  : `${account.substring(0, 6)}...${account.substring(
                      account.length - 4
                    )} 🟢`}
              </a>
            </li>
            {/* second button on bigger screen */}
            <li className="nav-item ms-2 d-none d-md-inline">
              <a
                className="btn dashboard-btn2"
                onClick={(e) => {
                  e.preventDefault();
                  setActivatingConnector(injected);
                  activate(injected);
                }}
                href="#/"
              >
                {account === undefined
                  ? 'Connect'
                  : account === null
                  ? 'None'
                  : `${account.substring(0, 6)}...${account.substring(
                      account.length - 4
                    )} 🟢`}
              </a>
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
      <LotBottomImage />
      <FooterImages />
      <Footer2 />
    </Fragment>
  );
};
