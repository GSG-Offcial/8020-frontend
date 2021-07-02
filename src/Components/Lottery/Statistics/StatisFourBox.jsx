import React, { useEffect } from 'react';
import styles from './StatisFourBox.module.css';
import { useContract } from '../../../Hooks/lottery';
import { useState } from 'react';
import { formatValue, countAddress } from '../../../utils/index';

export const StatisFourBox = () => {
  const contract = useContract();

  const [pick3GS50, setPick3GS50] = useState('loading');
  const [pick4GS50, setPick4GS50] = useState('loading');
  const [pick3Wallet, setpick3Wallet] = useState(0);
  const [pick4Wallet, setpick4Wallet] = useState(0);
  const [pick3Limit, setPick3Limit] = useState(0);
  const [pick4Limit, setPick4Limit] = useState(0);

  useEffect(async () => {
    if (contract) {
      setPick3GS50(formatValue(await contract.pick3Pot()));
      setPick4GS50(formatValue(await contract.pick4Pot()));

      let pick3Events = await contract.queryFilter(
        contract.filters.Pick3LotteryBought()
      );
      let pick3Addresses = [];
      pick3Events.filter(({ args }) => {
        if (args.UserAddress) {
          pick3Addresses.push(args.UserAddress);
        }
        return true;
      });

      setpick3Wallet(countAddress(pick3Addresses));

      let pick4Addresses = [];

      let pick4Events = await contract.queryFilter(
        contract.filters.Pick4LotteryBought()
      );
      pick4Events.filter(({ args }) => {
        if (args.UserAddress) {
          pick4Addresses.push(args.UserAddress);
        }
        return true;
      });

      setpick4Wallet(countAddress(pick4Addresses));

      let maxLimit = await contract.maxNoOfLottery();
      setPick4Limit(+maxLimit - +(await contract.currentIdForPick4()) + 1);
      setPick3Limit(+maxLimit - +(await contract.currentIdForPick3()) + 1);
    }
  }, [contract]);

  return (
    <div className={`${styles.statis_mainDiv} row`}>
      <h1 className={styles.statis_heading1}>Statictics</h1>
      <div className="col-lg-6 col-md-12">
        <div className={styles.nested_div_statis}>
          <p>{pick3GS50} GS50</p>
          <p className={styles.para_statis}>
            GS50 in Pick 3(Next Drawing will run after {pick3Limit} wallets
            Entered the contest)
          </p>
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className={styles.nested_div_statis}>
          <p>{pick4GS50} GS50</p>
          <p className={styles.para_statis}>
            GS50 in Pick 4(Next Drawing will run after {pick4Limit} wallets
            Entered the contest)
          </p>
        </div>
      </div>
      <div className={`col-lg-6 col-md-12`}>
        <div className={styles.nested_div_statis} id={styles.thrid_DivBox}>
          <p>{(+pick3GS50 + +pick4GS50).toFixed(2)} GS50</p>
          <p className={styles.para_statis}>Total GS50 being dropped.</p>
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div
          className={styles.nested_div_statis}
          id={styles.statistics_lastDiv}
        >
          <div>
            <p>{pick3Wallet} Wallets</p>
            <p className={styles.para_statis}>Total Pick 3 Players .</p>
          </div>
          <div>
            <p>{pick4Wallet} Wallets</p>
            <p className={styles.para_statis}>Total Pick 3 Players .</p>
          </div>
        </div>
      </div>
    </div>
  );
};
