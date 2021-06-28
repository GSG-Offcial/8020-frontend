import { useWeb3React } from '@web3-react/core';
import React from 'react';
import styles from './LotteryTopBox.module.css';
export const LotteryTopBox = () => {
  const { account } = useWeb3React();
  return (
    <div className={styles.lot_top_div}>
      <h1>GS50 Token Drop</h1>
      <div className={styles.lot_Box}>
        <p className={styles.first_para}>Connected Wallet Address</p>
        <p className={styles.second_para}>{account}</p>
      </div>
    </div>
  );
};
