import React from 'react'
import styles from './NFTTable.module.css'


export const NFTTable = () => {
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

                        <tr>
                            <th>1</th>
                            <td>1/4/2021 </td>
                            <td>B2ef3or4epu5rc6ha7si8ng8cr9yptocurrency</td>
                            <td>783</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
