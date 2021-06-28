import { useWeb3React } from '@web3-react/core';
import React, { useState, useEffect } from 'react';
import { useContract } from '../../../Hooks/lottery';
import styles from './Pick3Drop.module.css';

export const Pick3Drop = () => {
  const contract = useContract();
  const { account } = useWeb3React();

  const [pick3Total, setPick3Total] = useState();
  const [pick4Total, setPick4Total] = useState();
  const [pick3Number, setPick3Number] = useState([]);
  const [pick4Number, setPick4Number] = useState([]);

  useEffect(async () => {
    if (!!contract) {
      setPick3Number(
        (await contract.getUserLotteryNumber(account, 3)).map((e) => {
          return String(e);
        })
      );

      setPick4Number(
        (await contract.getUserLotteryNumber(account, 4)).map((e) => {
          return String(e);
        })
      );
    }
  }, [contract]);

  return (
    <div className={styles.Pick3Drop}>
      <div className={styles.lot_nested_div}>
        <p className={styles.para_lot1}>Pick 3 Drop</p>

        <p className={styles.para_lot2}>Total Active Picks</p>
        <p className={styles.para_lot3}>{pick3Number.length}</p>
        <p className={styles.para_lot4}>Your Active Number</p>

        <div
          class={`row col-10 col-md-10 mx-auto mb-4  ${styles.user_pick_lottery_numbers}`}
        >
          {pick3Number.map((e) => {
            return (
              <div class="col mx-auto">
                <div
                  class={`card p-2 m-1 text-white fw-bolder fs-4 ${styles.nestedDiv_LotteryNumber}`}
                >
                  {e}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.lot_nested_div}>
        <p className={styles.para_lot1}>Pick 4 Drop</p>
        <p className={styles.para_lot2}>Total Active Picks</p>
        <p className={styles.para_lot3}>{pick4Number.length}</p>
        <p className={styles.para_lot4}>Your Active Number</p>

        <div
          class={`row col-10 col-md-10 mx-auto mb-4  ${styles.user_pick_lottery_numbers}`}
        >
          {pick4Number.map((e) => {
            return (
              <div class="col mx-auto">
                <div
                  class={`card p-2 m-1 text-white fw-bolder fs-4 ${styles.nestedDiv_LotteryNumber}`}
                >
                  {e}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
