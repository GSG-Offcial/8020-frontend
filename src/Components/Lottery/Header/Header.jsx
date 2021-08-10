import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  FooterImages,
  Footer2,
} from '../index';
import { useEagerConnect, useInactiveListener } from '../../../Hooks/index';
import { injected } from '../../../connectors';
import { useWeb3React } from '@web3-react/core';
import { useContract } from '../../../Hooks/index';
import { fromWei } from '../../../utils';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const context = useWeb3React();
  const { connector, account, library, chainId, activate } = context;
  const contract = useContract();

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState();

  const [ethPrice, setEthPrice] = useState(0);
  const [tokenPrice, setTokenPrice] = useState();
  const [refAddress, setRefAddress] = useState('loading');
  const [chainName, setChainName] = useState('Loading');

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  useEffect(async () => {
    if (contract) {
      let buyPrice = await contract.buyPrice();
      buyPrice = fromWei(+buyPrice.toString());
      setTokenPrice(buyPrice * ethPrice);
      const refId = await contract.getReferrer();
      setRefAddress(refId);
    }
    if (chainId === 1) {
      setChainName('Mainnet');
    } else if (chainId === 4) {
      setChainName('Rinkeby');
    } else if (chainId === 56) {
      setChainName('BSC Mainnet');
    } else if (chainId === 137) {
      setChainName('MATIC Mainnet');
    } else if (chainId === 80001) {
      setChainName('Matic Testnet');
    } else if (chainId === 97) {
      setChainName('BSC Testnet');
    } else if (chainId === undefined) {
      setChainName('Wallet NOT Connected please Connect =>');
    } else {
      setChainName('Wrong chain Check wallet');
    }
  }, [contract, ethPrice, chainId]);

  useEffect(() => {
    if (chainId === 97 || chainId === 56) {
      fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin'
      )
        .then((response) => response.json())
        .then((data) => {
          setEthPrice(data[0].current_price);
        });
    } else if (chainId === 80001 || chainId === 137) {
      fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network'
      )
        .then((response) => response.json())
        .then((data) => {
          setEthPrice(data[0].current_price);
        });
    } else {
      fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum'
      )
        .then((response) => response.json())
        .then((data) => {
          setEthPrice(data[0].current_price);
        });
    }
  }, [library, contract, chainId]);

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = `http://8020testing.surge.sh/dashboard?ref=${account}`;
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

  // const connected = injected === connector;

  return (
    <Fragment>
      {/* navbar */}
      <nav className="navbar navbar-expand-md fixed-top main-NavBar">
        <div className="container nested-DivDB">
          <a href="#/" className="navbar-brand">
            <span className="fw-bold display-6 text-white">
              GS50 Token Drop
            </span>
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
                    GS50: ${Number(tokenPrice).toFixed(2)}
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
                    NFT Pool
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link dashboard-text"
                  aria-current="page"
                  href="#/"
                >
                  GS50: ${Number(tokenPrice).toFixed(2)}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link id-Nub" href="#/">
                  Your Referral :
                  {`${refAddress.substring(0, 6)}...${refAddress.substring(
                    refAddress.length - 4
                  )} `}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link db-copyRef"
                  onClick={copyToClipboard}
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
              <a className="btn dashboard-btn3 " href="#/">
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
                  : `${account.substring(0, 6)}...${account.substring(
                      account.length - 4
                    )}`}
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
      <FooterImages />
      <Footer2 />
    </Fragment>
  );
};
