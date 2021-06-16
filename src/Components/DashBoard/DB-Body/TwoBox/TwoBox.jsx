import React, { useState, useEffect } from 'react';
import './TwoBox.css';
import {
  getContract,
  formatNumber,
  fromWei,
  toWei,
} from '../../../../utils/index';
import { abi, address } from '../../../../constants/8020.json';
import { useWeb3React } from '@web3-react/core';

export const TwoBox = () => {
  const { library, account } = useWeb3React();

  const [contract, setContract] = useState();
  const [amount, setAmount] = useState('');
  const [button, setbutton] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    if (library) {
      let contractGSG = getContract(abi, address, library, account);
      setContract(contractGSG);
    }
  }, [library]);

  const buyToken = async () => {
    if (contract) {
      const amount = toWei(document.getElementById('buyToken').value);
      let overrides = {
        value: amount,
      };
      const tx = await contract.buy(
        '0xB883522944A7c7DCe56774B875d6573F39758e34',
        overrides
      );
      if (await tx.wait()) window.location.reload();
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
      setAmount(`you will receive ${formatNumber(fromWei(eth))} ETH`);
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
          backgroundColor: 'red',
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
// import React from 'react';
// import './TwoBox.css';
// export const TwoBox = () => {
//   return (
//     <div className="two-box">
//       <div>
//         <ul className="twobox-ul">
//           <li className="button button-1">Buy</li>
//           <li className="button button-2">Sell</li>
//         </ul>

//         <ul className="second-ul">
//           <li className="links link-1">Enter ETN</li>
//           <li className="links link-2">Max</li>
//         </ul>

//         <p className="box-para">You will give 1000 Token</p>
//         <form>
//           <input type="submit" value="Buy" className="buy-button" />
//         </form>
//       </div>
//       <div>
//         <h1>Hello</h1>
//       </div>
//     </div>
//   );
// };
