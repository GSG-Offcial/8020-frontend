import React from 'react';
// import styles from './BottomTwoBox.module.css'
// import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './BottomTwoBox.css';
import { calculatePrice } from '../../../../utils/index';
import { useContract } from '../../../../Hooks/index';
import { useEffect, useState } from 'react';
import ethereum from '../../../Images/MaskGroup24.svg';
import matic from '../../../Images/matic.svg';
import binance from '../../../Images/binance.svg';
import { useWeb3React } from '@web3-react/core';

export const BottomTwoBox = ({ price, withdrawAmount }) => {
  const contract = useContract();
  const { chainId } = useWeb3React();

  const [currency, setCurrency] = useState('');
  const [logoInCard, setLogoInCard] = useState();

  async function withdraw() {
    if (contract) {
      const tx = await contract.withdraw();
      if (await tx.wait()) window.location.reload();
    }
  }

  async function cycle() {
    if (contract) {
      const tx = await contract.reinvest();
      if (await tx.wait()) window.location.reload();
    }
  }

  useEffect(() => {
    if (chainId === 80001 || chainId === 137) {
      setLogoInCard(matic);
      setCurrency('MATIC');
    } else if (chainId === 56 || chainId === 97) {
      setLogoInCard(binance);
      setCurrency('BNB');
    } else {
      setLogoInCard(ethereum);
      setCurrency('ETH');
    }
  }, [contract]);

  return (
    <div className=" bottom_box">
      <div className="col-lg-6 col-12">
        <div className="nested_BottomDiv1">
          <p className="bottom_para">Token you can withdraw</p>
          <img src={logoInCard} alt="" />
          <p>
            {withdrawAmount} {currency}{' '}
            <span className="span_color">
              (${calculatePrice(price, withdrawAmount)})
            </span>
          </p>
          <button
            type="button"
            onClick={withdraw}
            className="btn btn-primary btn-sm bottom_button"
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="col-lg-6 col-12">
        <div className="nested_BottomDiv2">
          <p className="bottom_para">Token you can with draw</p>
          <img src={logoInCard} alt="" />
          <p>
            {withdrawAmount} {currency}
            <span className={'span_color'}>
              (${calculatePrice(price, withdrawAmount)})
            </span>
          </p>
          <button
            type="button"
            onClick={cycle}
            className="btn btn-primary btn-sm bottom_button"
          >
            Cycle
          </button>
        </div>
      </div>
    </div>
  );
};
