<<<<<<< HEAD
import React from 'react'
import styles from './BottomTwoBox.module.css'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const BottomTwoBox = () => {
    return (
        <div className={styles.bottom_box}>
            <div>
           <p className={styles.bottom_para}>Token you can with draw</p>
           <p>0.1 Eth <span className={styles.span_color}>($1000)</span></p>
           {/* <input type="button" value="Withdraw" className={styles.bottom_button}/> */}
           <button type="button" class={`btn btn-primary btn-sm ${styles.bottom_button}`}>Withdraw</button>
            </div>
            <div>
            <p className={styles.bottom_para}>Token you can with draw</p>
           <p>0.1 Eth <span className={styles.span_color}>($1000)</span></p>
           {/* <input type="button" value="Cycle" className={styles.bottom_button} /> */}
           <button type="button" className={`btn btn-primary btn-sm ${styles.bottom_button}`}>Cycle</button>

            </div>
        </div>
    )
}
=======
import React from 'react';
import './BottomTwoBox.css';
import {
  getContract,
  calculatePrice,
  formatValue,
  formatNumber,
} from '../../../../utils/index';
import { abi, address } from '../../../../constants/8020.json';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';

export const BottomTwoBox = ({ price }) => {
  const { library, account } = useWeb3React();

  const [contract, setContract] = useState();
  const [withdrawAmount, setWithdrawAmount] = useState('loading');
  const [totalSupply, setTotalSupply] = useState('loading');

  useEffect(() => {
    if (library) {
      let contractGSG = getContract(abi, address, library, account);
      setContract(contractGSG);
    }
  }, [library]);

  useEffect(async () => {
    if (contract) {
      const totalWithdrawn = await contract.totalWithdrawAmount();
      setWithdrawAmount(formatValue(totalWithdrawn));
    }
  });

  return (
    <div className="bottom-box">
      <div>
        <p className="bottom-para bottom-1">Token you can withdraw</p>
        <p>
          {withdrawAmount} Eth{' '}
          <span className="span-color">
            (${calculatePrice(price, withdrawAmount)})
          </span>
        </p>
        <input type="button" value="Withdraw" className="bottom-button" />
      </div>
      <div>
        <p className="bottom-para bottom-2">Token you can with draw</p>
        <p>
          {withdrawAmount} Eth
          <span className="span-color">
            (${calculatePrice(price, withdrawAmount)})
          </span>
        </p>
        <input type="button" value="Cycle" className="bottom-button" />
      </div>
    </div>
  );
};
>>>>>>> 9e52ef50b92feed54f5a5451ba9aef7797362617
