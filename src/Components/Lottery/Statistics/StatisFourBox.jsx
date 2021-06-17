import React from 'react'
import styles from './StatisFourBox.module.css'
export const StatisFourBox = () => {
    return (
        <div className={`${styles.statis_mainDiv} row`}>
            <h1>Statictics</h1>
            <div className="col-lg-6 col-md-12">
                <div className={styles.nested_div_statis}>
                    <p >192.7 GS50</p>
                    <p className={styles.para_statis}>GS50 in Pick 3(Next Drawing will run after 1 wallets
                        Entered the contest)</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className={styles.nested_div_statis}>
                    <p >465.3 GS50</p>
                    <p className={styles.para_statis}>GS50 in Pick 3(Next Drawing will run after 1 wallets
                        Entered the contest)</p>
                </div>

            </div>
            <div className="col-lg-6 col-md-12">
                <div className={styles.nested_div_statis}>
                    <p >658.000 GS50</p>
                    <p className={styles.para_statis}>Total GS50 being dropped.</p>
                </div>

            </div>
            <div className="col-lg-6 col-md-12">
                <div className={styles.nested_div_statis} id={styles.statistics_lastDiv}>
                    <div>
                    <p>10 Wallets</p>
                    <p className={styles.para_statis}>Total Pick 3 Players.</p>
                    </div>
                    <div>
                    <p>10 Wallets</p>
                    <p className={styles.para_statis}>Total Pick 3 Players.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
