import React, { useState } from 'react';
import './TwoBox.css';
import { formatNumber, fromWei, toWei } from '../../../../utils/index';
import { useContract } from '../../../../Hooks/index';
import { useWeb3React } from '@web3-react/core';

export const TwoBox = ({ refAddress }) => {
  const contract = useContract();
  const { chainId } = useWeb3React();

  const [amountBuy, setAmountBuy] = useState('');
  const [amountSell, setAmountSell] = useState('');
  const [buttonBuy, setbuttonBuy] = useState('');
  const [buttonSell, setbuttonSell] = useState('');
  const [inputBuy, setInputBuy] = useState('');
  const [inputSell, setInputSell] = useState('');
  const [currency, setCurrency] = useState('');

  const buyToken = async () => {
    if (contract) {
      const amount = toWei(document.getElementById('buyToken').value);
      let overrides = {
        value: amount,
      };

      if (
        refAddress !== 'loading' ||
        refAddress !== '0x0000000000000000000000000000000000000000'
      ) {
        const tx = await contract.buy(refAddress, overrides);
        if (await tx.wait()) window.location.reload();
      } else {
        alert('Referral Address is not loaded yet, TRy AGAIN');
      }
      if (chainId === 80001 || chainId === 137) {
        setCurrency('MATIC');
      } else if (chainId === 56 || chainId === 97) {
        setCurrency('BNB');
      } else {
        setCurrency('ETH');
      }
    }
  };

  const sellToken = async () => {
    if (contract) {
      const amount = toWei(document.getElementById('sellToken').value);
      const tx = await contract.sell(amount);
      tx.wait();
      if (await tx.wait()) window.location.reload();
    }
  };

  const calculateToken = async (eth) => {
    if (contract) {
      const token = await contract.calculateTokensReceived(eth);
      setAmountBuy(
        `you will receive ${formatNumber(fromWei(token))} GS50 Token`
      );
    }
  };

  const calculateEth = async (token) => {
    if (contract) {
      const eth = await contract.calculateEthereumReceived(token);
      setAmountSell(
        `You will get  ${Number(fromWei(eth)).toFixed(6)} ${currency}`
      );
    }
  };

  const buyBtn = () => {
    setInputBuy(
      <input
        id="buyToken"
        class="form-control form-control-lg token-input"
        type="number"
        placeholder="Enter Amount"
        onChange={(e) => {
          const value = e.target.value;
          if (value > 0) {
            calculateToken(toWei(value));
          }
        }}
        aria-label=".form-control-lg example"
      />
    );

    setbuttonBuy(
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          buyToken();
        }}
        className={`token-buy-button btn-lg btn-outline-success `}
      >
        Buy
      </button>
    );
  };

  const sellBtn = () => {
    setInputSell(
      <input
        id="sellToken"
        class="form-control form-control-lg token-input"
        type="number"
        placeholder="Enter GS50 Token"
        onChange={(e) => {
          const value = e.target.value;
          if (value > 0) {
            calculateEth(toWei(value));
          }
        }}
        aria-label=".form-control-lg example"
      />
    );

    setbuttonSell(
      <button
        onClick={(e) => {
          e.preventDefault();
          sellToken();
        }}
        style={{
          backgroundColor: 'rgb(168, 50, 50)',
        }}
        type="submit"
        className={`token-buy-button btn-lg btn-outline-success `}
      >
        Sell
      </button>
    );
  };

  return (
    <div className="two-box">
      <div className="col-lg-6 col-12">
        <div className="nested_Div1">
          <ul className="twobox-ul">
            <button className="button button-1" onClick={buyBtn}>
              Buy
            </button>
            {/* <button className="button button-2" onClick={sellBtn}>
              Sell
            </button> */}
          </ul>

          {inputBuy}

          <p className="box-para">{amountBuy}</p>

          <form class={`d-flex`}>{buttonBuy}</form>
        </div>
      </div>

      <div className="col-lg-6 col-12">
        <div className="nested_Div2">
          {/* <h1>Hello</h1> */}
          <ul className="twobox-ul">
            {/* <button className="button button-1" onClick={buyBtn}>
              Buy
            </button> */}
            <button className="button button-2" onClick={sellBtn}>
              Sell
            </button>
          </ul>

          {inputSell}

          <p className="box-para">{amountSell}</p>

          <form class={`d-flex`}>{buttonSell}</form>
        </div>
      </div>
    </div>
  );
};
