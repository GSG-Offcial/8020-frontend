import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
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
  }, [library]);

  useEffect(async () => {
    if (contract) {
      let buyPrice = await contract.buyPrice();
      buyPrice = fromWei(+buyPrice.toString());
      setTokenPrice(buyPrice * ethPrice);
      const refId = await contract.getReferrer();
      setRefAddress(refId);
    }
  }, [contract, library]);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum'
    )
      .then((response) => response.json())
      .then((data) => {
        setEthPrice(data[0].current_price);
      });
  }, [library]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const connected = injected === connector;

  const disabled = !triedEager || !!activatingConnector || connected || !!error;

  return (
    <Fragment>


      <nav className="navbar navbar-expand-lg navbar-mainbg DB-Navbar" id="NavBar">

        <NavLink className="navbar-brand navbar-logo" to="/" exact>
          <div>

            <h1>
              <span className="badge header-heading">DashBoard</span>
            </h1>

          </div>

        </NavLink>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end button-div">
          <button type="button" class="btn btn-primary btn-lg connect-dahboard me-md-2" style={{
            cursor: disabled ? 'unset' : 'pointer',
          }}
            disabled={disabled}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setActivatingConnector(injected);
              activate(injected);
            }}>{account === undefined
              ? 'Connect'
              : account === null
                ? 'None'
                : `${account.substring(0, 6)}...${account.substring(
                  account.length - 4
                )} 🟢`}</button>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mainDB-UL">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item" >

              <a className="nav-link active dashboard-text" aria-current="page" href="#/">
                Dashboard
              </a>

            </li>
            <li className="nav-item" >

              <a className="nav-link active dB-ID text-white" aria-current="page" href="#/">
                Your spons ID:{' '}
                {`${refAddress.substring(0, 6)}${refAddress.substring(
                  refAddress.length - 4
                )} `}
              </a>

            </li>

            <li className="nav-item" >
              <a className="nav-link active db-copyRef text-white" aria-current="page" href="#/">
                Copy Ref. link
              </a>
            </li>
          </ul>

        </div>
        <button type="button" class="btn btn-primary btn-lg dashboard-btn2" style={{
          cursor: disabled ? 'unset' : 'pointer',
        }}
          disabled={disabled}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setActivatingConnector(injected);
            activate(injected);
          }}>{account === undefined
            ? 'Connect'
            : account === null
              ? 'None'
              : `${account.substring(0, 6)}...${account.substring(
                account.length - 4
              )} 🟢`}</button>
      </nav>

      <SideBar />
      <FourBox price={ethPrice} GS50Price={tokenPrice} />
      <TwoBox />
      <BottomFourBox price={ethPrice} GS50Price={tokenPrice} />
      <BottomTwoBox price={ethPrice} />
      <Desclaimer />
      <FooterImage />
    </Fragment>
  );
};
