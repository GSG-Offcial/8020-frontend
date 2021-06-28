import { useWeb3React } from '@web3-react/core';
import React, { useState, useEffect } from 'react';
import { useContract } from '../../../Hooks/lottery';
import styles from './Pick3Drop.module.css';

export const Pick3Drop = () => {
  const contract = useContract();
  const { account } = useWeb3React();

  const [pick3Total, setPick3Total] = useState();
  const [pick4Total, setPick4Total] = useState();
  const [pick3Number, setPick3Number] = useState();
  const [pick4Number, setPick4Number] = useState();

  useEffect(async () => {
    if (!!contract) {
      console.log(await contract.pick3User(account));
      setPick3Number(await contract.getUserLotteryNumber(account, 3));
    }
  }, [contract]);

  return (
    <div className={styles.Pick3Drop}>
      <div className={styles.lot_nested_div}>
        <p className={styles.para_lot1}>Pick 3 Drop</p>
        <p className={styles.para_lot2}>Number Picks</p>
        <p className={styles.para_lot3}>0</p>
        <p className={styles.para_lot4}>Your Active Number</p>
      </div>
      <div className={styles.lot_nested_div}>
        <p className={styles.para_lot1}>Pick 3 Drop</p>
        <p className={styles.para_lot2}>Total Active Picks</p>
        <p className={styles.para_lot3}>0</p>
        <p className={styles.para_lot4}>Your Active Number</p>
      </div>
    </div>
  );
};
