import React from 'react';
import styles from './LotForm3.module.css';
export const LotForm3 = () => {
    return (
        <div className={`mt-5 ${styles.LotFrom3_mainDiv}`}>
            <h1 className={`text-center display-6 mt-3 mb-3 ${styles.Lotfrom3_h1}`}>CONTRACT DRAWING HISTORY</h1>
            <div class={`table-responsive ${styles.LotForm1Table3}`}>
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
                        <tr>
                            <th scope="row">1</th>
                            <td>1/4/2021</td>
                            <td>B2ef3or4epu5rc6ha7si8ng8cr9yptocurrency</td>
                            <td>783</td>
                            <td>3</td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>1/4/2021</td>
                            <td>B2ef3or4epu5rc6ha7si8ng8cr9yptocurrency</td>
                            <td>0263</td>
                            <td>4</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>1/4/2021</td>
                            <td>B2ef3or4epu5rc6ha7si8ng8cr9yptocurrency</td>
                            <td>975</td>
                            <td>3</td>

                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>1/4/2021</td>
                            <td>B2ef3or4epu5rc6ha7si8ng8cr9yptocurrency</td>
                            <td>8229</td>
                            <td>4</td>

                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>1/4/2021</td>
                            <td>B2ef3or4epu5rc6ha7si8ng8cr9yptocurrency</td>
                            <td>8229</td>
                            <td>4</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
