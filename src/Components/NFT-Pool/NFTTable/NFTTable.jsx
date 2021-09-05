import React from 'react';
import styles from './NFTTable.module.css';

export const NFTTable = ({ data }) => {
  console.log(data);
  function calDate(time) {
    const dateobj = new Date(time * 1000);
    const day = dateobj.getDate();
    const month = Number(dateobj.getMonth()) + 1;
    const year = dateobj.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className={`mt5 mb-5 ${styles.NFTTable_mainDiv}`}>
      <h3 className={`mt-4 text-white ${styles.headingform1_nft}`}>
        REWARD HISTORY
      </h3>

      <div class={`table-responsive ${styles.nftTable1} `}>
        <table class="table  table-borderless">
          <thead className={styles.thead_backgroundNFT}>
            <tr className="text-white">
              <th scope="col">No:</th>
              <th scope="col">Date</th>
              <th scope="col">Address</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {data.map((item, i) => {
              if (item === undefined) return;
              return (
                <tr>
                  <th>{i}</th>
                  <td>{calDate(item.time)}</td>
                  <td>{item.address}</td>
                  <td>{item.amount / 10 ** 18}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
