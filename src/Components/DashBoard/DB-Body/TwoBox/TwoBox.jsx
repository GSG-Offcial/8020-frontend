import React, { useState, useEffect } from 'react';
import './TwoBox.css';
import { formatNumber, fromWei, toWei } from '../../../../utils/index';
import { useContract } from '../../../../Hooks/index';

export const TwoBox = ({ refAddress }) => {
  const contract = useContract();

  const [amount, setAmount] = useState('');
  const [button, setbutton] = useState('');
  const [input, setInput] = useState('');

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
        alert('Referral Addres is not loaded yet, TRy AGAIN');
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
      setAmount(`you will receive ${formatNumber(fromWei(token))} GS50 Token`);
    }
  };

  const calculateEth = async (token) => {
    if (contract) {
      const eth = await contract.calculateEthereumReceived(token);
      setAmount(`you will receive ${Number(fromWei(eth)).toFixed(6)} ETH`);
    }
  };

  const buyBtn = () => {
    setInput(
      <input
        id="buyToken"
        class="form-control form-control-lg token-input"
        type="number"
        placeholder="Enter ETH"
        onChange={(e) => {
          const value = e.target.value;
          if (value > 0) {
            calculateToken(toWei(value));
          }
        }}
        aria-label=".form-control-lg example"
      />
    );

    setbutton(
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
    setInput(
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

    setbutton(
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
      <div>
        <ul className="twobox-ul">
          <button className="button button-1" onClick={buyBtn}>
            Buy
          </button>
          <button className="button button-2" onClick={sellBtn}>
            Sell
          </button>
        </ul>

        {input}

        <p className="box-para">{amount}</p>

        <form class={`d-flex`}>{button}</form>
      </div>
      <div>
        <h1>Hello</h1>
      </div>
    </div>
  );
};
