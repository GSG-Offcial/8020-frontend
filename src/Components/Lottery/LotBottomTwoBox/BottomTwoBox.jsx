import React, { useState } from 'react';
import styles from './BottomTwoBox.module.css';
import { useContract } from '../../../Hooks/lottery';
import { useEffect } from 'react';
import { formatValueOfPick3, formatValueOfPick4 } from '../../../utils/index';
import tip from '../../Images/tip.png';

export const BottomTwoBox = () => {
  const contract = useContract();

  const [pick3Number, setPick3Number] = useState('0 0 0');
  const [pick4Number, setPick4Number] = useState('0 0 0 0');
  useEffect(async () => {
    if (!!contract) {
      let pick3Numbers = [];
      let pick4Numbers = [];
      const pick3Events = await contract.queryFilter(contract.filters.Random());
      pick3Events.map(({ args }) => {
        if (Number(String(args.pick)) === 3) {
          pick3Numbers.push(String(args.number));
        } else if (Number(String(args.pick)) === 4) {
          pick4Numbers.push(String(args.number));
        }
        return true;
      });
      setPick3Number(pick3Numbers[pick3Numbers.length - 1]);
      setPick4Number(pick4Numbers[pick4Numbers.length - 1]);
    }
  }, [contract]);

  return (
    <div className={`${styles.main_BottomTwoBox} row mb-3`}>
      <div className="col-lg-6 col-md-12 mb-4">
        <div className={styles.BottomTwoBox_nesteddiv}>
          <p>Last Pick 3 Numbers</p>
          <p className={styles.nub_bottomTwoBox}>
            {formatValueOfPick3(pick3Number)}
          </p>

          <div class={`${styles.lottery_statistics_tip_icon}`}>
            <img src={tip} alt="" data-toggle="tooltip" />
            <span className={`${styles.toolTipText}`}>
              This is the last number that was randomly generated in the Pick 3
              drawing. You can only win by matching the numbers exactly.
            </span>
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-12">
        <div className={styles.BottomTwoBox_nesteddiv}>
          <p>Last Pick 4 Numbers</p>
          <p className={styles.nub_bottomTwoBox}>
            {formatValueOfPick4(pick4Number)}
          </p>

          <div class={`${styles.lottery_statistics_tip_icon}`}>
            <img src={tip} alt="" data-toggle="tooltip" />
            <span className={`${styles.toolTipText}`}>
              This is the last number that was randomly generated in the Pick 4
              drawing. You can only win by matching the numbers exactly.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
