import React, { Fragment, useState, useEffect } from 'react';
import './DashBoardNavbar.css';
import {
  FourBox,
  SideBar,
  TwoBox,
  BottomFourBox,
  BottomTwoBox,
  Desclaimer,
  FooterImage,
} from '../DB-Body/index';
import { useWeb3React } from '@web3-react/core';
import { useEagerConnect, useInactiveListener } from '../../../Hooks/index';
import { injected } from './../../../connectors';

export const DashBoardNavbar = () => {
  const context = useWeb3React();
  const { connector, account, activate, error } = context;

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

  const disabled = !triedEager || !!activatingConnector || connected || !!error;

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
              <a className="nav-link active" aria-current="page" href="#/">
                Dashboard
              </a>
            </li>
            <li className="nav-item" id="lottery-li2">
              <a className="nav-link active " aria-current="page" href="#/">
                Your spons ID: 0x02354309
              </a>
            </li>
            <li className="nav-item" id="lottery-li3">
              <a className="nav-link active" aria-current="page" href="#/">
                Copy Ref. link
              </a>
            </li>
          </ul>
        </div>
        <div>
          <form className="d-flex">
            <button
              style={{
                cursor: disabled ? 'unset' : 'pointer',
              }}
              disabled={disabled}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setActivatingConnector(injected);
                activate(injected);
              }}
              className="lottery-btn"
            >
              {account === undefined
                ? 'Connect'
                : account === null
                ? 'None'
                : `${account.substring(0, 6)}...${account.substring(
                    account.length - 4
                  )} 🟢`}
            </button>
          </form>
        </div>
      </div>
      <SideBar />
      <FourBox />
      <TwoBox />
      <BottomFourBox />
      <BottomTwoBox />
      <Desclaimer />
      <FooterImage />
    </Fragment>
  );
};
