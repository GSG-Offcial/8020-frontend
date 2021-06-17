import React from 'react'
import styles from './LotteryTopBox.module.css'
export const LotteryTopBox = () => {
    return (
        <div className={styles.lot_top_div}>
            <h1>GS50 Token Drop</h1>
            <div className={styles.lot_Box}>
                <p className={styles.first_para}>Connected Wallet Address</p>
                <p className={styles.second_para}>0x7cf196415cdd1ef08ca2358</p>
            </div>
        </div>
    )
}
