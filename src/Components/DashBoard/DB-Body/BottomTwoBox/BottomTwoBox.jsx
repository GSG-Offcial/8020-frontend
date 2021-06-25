import React from 'react';
// import styles from './BottomTwoBox.module.css'
// import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './BottomTwoBox.css';
import { calculatePrice, formatValue } from '../../../../utils/index';
import { useEffect, useState } from 'react';
import { useContract } from '../../../../Hooks/index';

export const BottomTwoBox = ({ price }) => {
  const contract = useContract();

  const [withdrawAmount, setWithdrawAmount] = useState('loading');

  useEffect(async () => {
    if (contract) {
      const totalWithdrawn = await contract.totalWithdrawAmount();
      setWithdrawAmount(formatValue(totalWithdrawn));
    }
  }, [contract, withdrawAmount]);

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

  return (
    <div className="bottom_box">
      <div>
        <p className="bottom_para">Token you can withdraw</p>
        <p>
          {withdrawAmount} Eth{' '}
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
      <div>
        <p className="bottom_para">Token you can with draw</p>
        <p>
          {withdrawAmount} Eth
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
  );
};
