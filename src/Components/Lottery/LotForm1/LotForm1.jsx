import React from 'react';
import styles from './LotForm1.module.css';
import tip from '../../Images/tip.png';

import { useContract } from '../../../Hooks/lottery';
import { useEffect } from 'react';
import { useState } from 'react';
import { formatValueOfPick3 } from '../../../utils/index';

export const LotForm1 = () => {
  const contract = useContract();

  const [pick3WinnerData, setPick3WinnerData] = useState([]);

  useEffect(async () => {
    if (contract) {
      const pick3WinnerEvents = await contract.queryFilter(
        contract.filters.Pick3Winner()
      );

      pick3WinnerEvents.map((e) => {
        setPick3WinnerData((prevArray) => [
          ...prevArray,
          {
            time: String(e.args.time),
            wallet: String(e.args.winner),
            txHash: String(e.transactionHash),
            number: String(e.args.number),
          },
        ]);
        return true;
      });
    }
  }, [contract]);

  function calDate(time) {
    const dateobj = new Date(time * 1000);
    const day = dateobj.getDate();
    const month = Number(dateobj.getMonth()) + 1;
    const year = dateobj.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className={styles.Lot_From1_mainDiv}>
      <h1 className={`mt-3 mb-3 ${styles.headingform1}`}>
        PICK 3 DROP HISTORY
      </h1>
      <i class={`${styles.lottery_statistics_tip_icon}`}>
        <img
          src={tip}
          alt=""
          data-toggle="tooltip"
          title="History of all drops in the Pick 3."
        />
      </i>
      <div class={`table-responsive ${styles.LotForm1Table1} `}>
        <table class="table  table-borderless">
          <thead className={styles.thead_background}>
            <tr className="text-white">
              <th scope="col">No:</th>
              <th scope="col">Date</th>
              <th scope="col">Wallet</th>
              <th scope="col">Txn Hash</th>
              <th scope="col">Number</th>
              <th scope="col">Pick</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {pick3WinnerData.map((e, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{calDate(e.time)}</td>
                  <td>{e.wallet}</td>
                  <td>{`${e.txHash.substring(0, 6)}...${e.txHash.substring(
                    e.txHash.length - 4
                  )}`}</td>
                  <td>{formatValueOfPick3(e.number)}</td>
                  <td>3</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
