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
import { getContract, fromWei } from '../../../utils';
import { useWeb3React } from '@web3-react/core';
import { useEagerConnect, useInactiveListener } from '../../../Hooks/index';
import { abi, address } from '../../../constants/8020.json';
import { injected } from '../../../connectors';

export const DashBoardNavbar = () => {
  const context = useWeb3React();
  const { connector, account, library, activate, error } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState();

  const [contract, setContract] = useState();
  const [ethPrice, setEthPrice] = useState(0);
  const [tokenPrice, setTokenPrice] = useState();
  const [refAddress, setRefAddress] = useState('loading');

  useEffect(() => {
    console.log('running');
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  useEffect(() => {
    if (library) {
      let contractGSG = getContract(abi, address, library, account);
      setContract(contractGSG);
    }
  }, [library, account, connector]);

  useEffect(async () => {
    if (contract) {
      let buyPrice = await contract.buyPrice();
      buyPrice = fromWei(+buyPrice.toString());
      setTokenPrice(buyPrice * ethPrice);
      const refId = await contract.getReferrer();
      setRefAddress(refId);
    }
  }, [contract, library, ethPrice]);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum'
    )
      .then((response) => response.json())
      .then((data) => {
        setEthPrice(data[0].current_price);
      });
  }, [library, contract]);

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = 'http://8020testing.surge.sh/dashboard' + '?' + 'ref=' + account;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  useEffect(() => {
    let address;
    if (refAddress !== 'loading') {
      var url = document.URL;
      if (url.indexOf('?') !== -1) {
        if (refAddress === '0x0000000000000000000000000000000000000000') {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          address = urlParams.get('ref');
          setRefAddress(address);
        }
      } else {
        if (refAddress === '0x0000000000000000000000000000000000000000') {
          address = '0x8Fac2C8dAfeb6bc93848C292772bfe68666a866a';
          setRefAddress(address);
        }
      }
    }
  }, [library, contract, refAddress]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const connected = injected === connector;

  const disabled = !triedEager || !!activatingConnector || connected || !!error;

  return (
    <Fragment>
      {/* navbar */}
      <nav className="navbar navbar-expand-md fixed-top main-NavBar">
        <div className="container nested-DivDB">
          <a href="#/" className="navbar-brand">
            <span className="fw-bold display-6 text-white">
              DashBoard
            </span>
          </a>
          {/* toggler button for mobile */}
          <button className="navbar-toggler Icon-Navbar" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span><i className="fas fa-bars text-white"></i></span>
          </button>
          <div className="collapse navbar-collapse align-center justify-content-center Link-div" id="main-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link dashboard-text" aria-current="page" href="#/">DashBoard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link id-Nub" href="#/">Your ID:1213345545</a>
              </li>
              <li className="nav-item">
                <a className="nav-link db-copyRef" href="#/">Copy Ref.Link</a>
              </li>

            </ul>

          </div>
          {/* button if screen less than madium then show first othrwise second button */}
          <div className="collapse navbar-collapse  justify-content-end" id="main-nav">
            <li className="nav-item ms-2 d-md-none">
              <a className="btn dashboard-btn1" href="#/">Link</a>
            </li>
            {/* second button on bigger screen */}
            <li className="nav-item ms-2 d-none d-md-inline">
              <a className="btn dashboard-btn2" href="#/">Connect</a>
            </li>
          </div>
        </div>


        {/* </div> */}
      </nav>




      <SideBar />
      <FourBox price={ethPrice} GS50Price={tokenPrice} />
      <TwoBox refAddress={refAddress} />
      <BottomFourBox price={ethPrice} GS50Price={tokenPrice} />
      <BottomTwoBox price={ethPrice} />
      <Desclaimer />
      <FooterImage />
    </Fragment>
  );
};
