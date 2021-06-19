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
    if (refAddress != 'loading') {
      var url = document.URL;
      if (url.indexOf('?') != -1) {
        if (refAddress == '0x0000000000000000000000000000000000000000') {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          address = urlParams.get('ref');
          setRefAddress(address);
        }
      } else {
        if (refAddress == '0x0000000000000000000000000000000000000000') {
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
                Your spons ID:{' '}
                {`${refAddress.substring(0, 6)}...${refAddress.substring(
                  refAddress.length - 4
                )} `}
              </a>
            </li>
            <li className="nav-item" id="lottery-li3">
              <a
                className="nav-link active"
                onClick={copyToClipboard}
                aria-current="page"
                href="#/"
              >
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
              className="connect-btn"
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
      <FourBox price={ethPrice} GS50Price={tokenPrice} />
      <TwoBox refAddress={refAddress} />
      <BottomFourBox price={ethPrice} GS50Price={tokenPrice} />
      <BottomTwoBox price={ethPrice} />
      <Desclaimer />
      <FooterImage />
    </Fragment>
  );
};
