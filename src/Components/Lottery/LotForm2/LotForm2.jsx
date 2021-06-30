import React from 'react'
import styles from './LotForm2.module.css';

export const LotForm2 = () => {
    return (
        <div className={`mt-3 ${styles.lotfrom2_mainDiv}`}>
            <h1 class={`display-6 text-center mt-3 mb-3 ${styles.lot_from2_h1}`}>PICK 4 DROP HISTORY</h1>
            <div class={`table-responsive  ${styles.LotForm1Table2}`}>
                <table class="table  table-borderless">
                    <thead >
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
                            <td>783</td>
                            <td>3</td>

                        </tr>
                        

                    </tbody>
                </table>
            </div>
        </div>
    )
}
