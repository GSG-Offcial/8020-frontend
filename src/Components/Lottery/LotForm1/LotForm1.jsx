import React from 'react'
import styles from './LotForm1.module.css';
export const LotForm1 = () => {
    return (
        <div className={styles.Lot_From1_mainDiv}>

            <h1 className={`mt-3 mb-3 ${styles.headingform1}`}>PICK 3 DROP HISTORY</h1>
            <div class={`table-responsive  ${styles.LotForm1Table1}`}>
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
                        <tr>
                            <th scope="row">1</th>
                            <td>1/4/2021</td>
                            <td>B2ef3or4epu5rc6ha7si8ng8cr9yptocurrency</td>
                            <td>1231</td>
                            <td>783</td>
                            <td>3</td>
                          
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>1/4/2021</td>
                            <td>B2ef3or4epu5rc6ha7si8ng8cr9yptocurrency</td>
                            <td>1231</td>
                            <td>0263</td>
                            <td>4</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>1/4/2021</td>
                            <td>B2ef3or4epu5rc6ha7si8ng8cr9yptocurrency</td>
                            <td>1231</td>
                            <td>975</td>
                            <td>3</td>

                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>1/4/2021</td>
                            <td>B2ef3or4epu5rc6ha7si8ng8cr9yptocurrency</td>
                            <td>1231</td>
                            <td>8229</td>
                            <td>4</td>

                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>1/4/2021</td>
                            <td>B2ef3or4epu5rc6ha7si8ng8cr9yptocurrency</td>
                            <td>1231</td>
                            <td>0263</td>
                            <td>5</td>

                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}
