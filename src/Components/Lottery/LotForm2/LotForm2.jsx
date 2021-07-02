import React from 'react';
import styles from './LotForm2.module.css';
import { useContract } from '../../../Hooks/lottery';
import { useEffect } from 'react';
import { useState } from 'react';
import { formatValueOfPick4 } from '../../../utils/index';

export const LotForm2 = () => {

  const contract = useContract();

  const [pick4WinnerData, setPick4WinnerData] = useState([]);

  useEffect(async () => {
    if (contract) {
      const pick4WinnerEvents = await contract.queryFilter(
        contract.filters.Pick4Winner()
      );

      pick4WinnerEvents.map((e) => {
        setPick4WinnerData((prevArray) => [
          ...prevArray,
          {
            time: String(e.args.time),
            wallet: String(e.args.winner),
            txHash: String(e.transactionHash),
            number: String(e.args.number),
          },
        ]);
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
    <div className={`mt-3 ${styles.lotfrom2_mainDiv}`}>
      <h1 class={`display-6 text-center mt-3 mb-3 ${styles.lot_from2_h1}`}>
        PICK 4 DROP HISTORY
      </h1>
      <div class={`table-responsive ${styles.LotForm1Table2} `}>
        <table class="table  table-borderless">
          <thead>
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
            {pick4WinnerData.map((e, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{calDate(e.time)}</td>
                  <td>{e.wallet}</td>
                  <td>{`${e.txHash.substring(0, 6)}...${e.txHash.substring(
                    e.txHash.length - 4
                  )}`}</td>
                  <td>{formatValueOfPick4(e.number)}</td>
                  <td>4</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
