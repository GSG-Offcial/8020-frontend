import React from 'react'
import styles from './LotForm.module.css';
export const LotForm1 = () => {
    return (
        <div className={styles.Lot_From1_mainDiv}>

            <h1 className={styles.headingform1}>PICK 3 DROP HISTORY</h1>
            <div>
                <table class={`table table-borderless ${styles.main_table}`}>
                    <thead>
                        <tr>
                            <th scope="col">No:</th>
                            <th scope="col">Date</th>
                            <th scope="col">Wallet</th>
                            <th scope="col">Txn Hash</th>
                            <th scope="col">Number</th>
                            <th scope="col">Pick</th>

                        </tr>
                    </thead>
                    <tbody>
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

                    </tbody>
                </table>
            </div>
        </div>
    )
}
