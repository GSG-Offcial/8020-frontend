import { useWeb3React } from '@web3-react/core';
import React from 'react';
import styles from './LotteryTopBox.module.css';
export const LotteryTopBox = () => {
  const { account } = useWeb3React();
  return <div className={styles.lot_top_div}></div>;
};
