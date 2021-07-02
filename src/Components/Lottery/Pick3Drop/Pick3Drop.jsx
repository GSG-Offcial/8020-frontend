import { useWeb3React } from '@web3-react/core';
import React, { useState, useEffect } from 'react';
import { useContract } from '../../../Hooks/lottery';
import styles from './Pick3Drop.module.css';
import Tip from '../../Images/tip.png'
export const Pick3Drop = () => {
  const contract = useContract();
  const { account } = useWeb3React();

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
    <div className={`row ${styles.Pick3Drop}`}>
      <div className="col-lg-6 col-md-12">
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
          <i className={`${styles.dashboard_statistics_tip_icon}`}>
                    <img src={Tip} alt="" data-toggle="tooltip"
                      title="Here you will see your connected wallet and your active picks for the current drawing.  Once the drawing takes place all tickets become used and numbers are cleared.  If you win the drawing you will be notified the next time you connect to the site." />
                  </i>
        </div>
      </div>

      <div className="col-lg-6 col-md-12">
        <div className={styles.lot_nested_div}>
          <p className={styles.para_lot1}>Pick 4 Drop</p>
          <p className={styles.para_lot2}>Total Active Picks</p>
          <p className={styles.para_lot3}>{pick4Number.length}</p>
          <p className={styles.para_lot4}>Your Active Number</p>

          <div
            class={`row col-10 col-md-10 mx-auto mb-4 user-pick-lottery-numbers ${styles.user_pick_lottery_numbers}`}
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
          <i className={`${styles.dashboard_statistics_tip_icon}`}>
                    <img src={Tip} alt="" data-toggle="tooltip"
                      title="Here you will see your connected wallet and your active picks for the current drawing.  Once the drawing takes place all tickets become used and numbers are cleared.  If you win the drawing you will be notified the next time you connect to the site." />
                  </i>
        </div>
      </div>
    </div>
  );
};
