import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nftheader.module.css';

// Import Comp
import {
  NftSidebar,
  MintToken,
  FiveNFTBox,
  NFTTable,
  NFTDesc,
  NFTBottomImage,
  NFTFotter,
  NFTLastFooter,
  YourReward,
} from '../index';

import { useEagerConnect, useInactiveListener } from '../../../Hooks/index';
import { injected } from '../../../connectors';
import { useWeb3React } from '@web3-react/core';

export const NftHeader = () => {
  const context = useWeb3React();
  const { connector, account, chainId, activate } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState();
  const [chainName, setChainName] = useState('Loading');

  useEffect(() => {
    console.log('running');
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
    if (chainId === 1) {
      setChainName('Mainnet');
    } else if (chainId === 3) {
      setChainName('Ropsten');
    } else if (chainId === 4) {
      setChainName('Rinkeby');
    } else if (chainId === 42) {
      setChainName('Kovan');
    } else if (chainId === 56) {
      setChainName('BSC Mainnet');
    } else if (chainId === 137) {
      setChainName('MATIC Mainnet');
    } else if (chainId === 80001) {
      setChainName('Matic Testnet');
    } else if (chainId === 97) {
      setChainName('BSC Testnet');
    } else {
      setChainName('Wrong chain Check wallet');
    }
  }, [activatingConnector, connector, chainId]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <Fragment>
      {/* navbar */}
      <nav className="navbar navbar-expand-md fixed-top main-NavBar">
        <div className="container nested-DivDB">
          <a href="#/" className="navbar-brand">
            <span className="fw-bold display-6 text-white">Lottery</span>
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
            className="collapse navbar-collapse align-center justify-content-center Link-div_lottery"
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link sidebar_text_lottery"
                  aria-current="page"
                  href="#/"
                >
                  <Link to="/dashboard" className="Nav_Link_lottery">
                    DashBoard
                  </Link>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link sidebar_text_lottery"
                  aria-current="page"
                  href="#/"
                >
                  <Link to="/lottery" className="Nav_Link_lottery">
                    Lottery
                  </Link>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link sidebar_text_lottery"
                  aria-current="page"
                  href="#/"
                >
                  <Link to="/nftPool" className="Nav_Link_lottery">
                    NFT Pool
                  </Link>
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
                    )}`}
              </a>
            </li>
            {/* second button on bigger screen */}
            <li className="nav-item ms-2 d-none d-md-inline">
              <a className="btn lot-dashboard-btn3" href="#/">
                {chainName}
                {/* dashboard-btn3 */}
              </a>
            </li>
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
                  : 'Connected'}
              </a>
            </li>
          </div>
        </div>
      </nav>

      <NftSidebar />
      <MintToken />
      <FiveNFTBox />
      <YourReward />
      <NFTTable />
      <NFTDesc />
      <NFTBottomImage />
      <NFTFotter />
      <NFTLastFooter />
    </Fragment>
  );
};
