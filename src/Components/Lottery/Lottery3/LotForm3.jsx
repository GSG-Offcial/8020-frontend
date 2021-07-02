import React from 'react';
import styles from './LotForm3.module.css';
import { useContract } from '../../../Hooks/lottery';
import { useEffect } from 'react';
import { useState } from 'react';
import { formatValueOfPick3, formatValueOfPick4 } from '../../../utils/index';
import tip from '../../Images/tip.png'

export const LotForm3 = () => {

  const contract = useContract();

  const [randomData, setRandomData] = useState([]);

  useEffect(async () => {
    if (contract) {
      const randomNumberEvents = await contract.queryFilter(
        contract.filters.Random()
      );

      randomNumberEvents.map((e) => {
        setRandomData((prevArray) => [
          ...prevArray,
          {
            time: String(e.args.time),
            wallet: String(e.args.Address),
            txHash: String(e.transactionHash),
            number: String(e.args.number),
            pick: String(e.args.pick),
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
    <div className={`mt-5 my-5 ${styles.LotFrom3_mainDiv}`}>
      <h1 className={`text-center display-6 mt-3 mb-3 ${styles.Lotfrom3_h1}`}>
        CONTRACT DRAWING HISTORY
      </h1>
      <i class={`${styles.lottery_statistics_tip_icon}`}>
              <img src={tip} alt="" data-toggle="tooltip"
                  title="CONTRACT DRAWING HISTORY." />
            </i>
      <div class={`table-responsive  ${styles.LotForm1Table3}`}>
        <table class="table  table-borderless">
          <thead className={styles.Lot3_background_color}>
            <tr className="text-white">
              <th scope="col">No:</th>
              <th scope="col">Date</th>
              <th scope="col">Wallet</th>
              <th scope="col">Number</th>
              <th scope="col">Pick</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {randomData.map((e, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{calDate(e.time)}</td>
                  <td>{e.wallet}</td>
                  <td>
                    {e.pick === 3
                      ? formatValueOfPick3(e.number)
                      : formatValueOfPick4(e.number)}
                  </td>
                  <td>{e.pick}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
