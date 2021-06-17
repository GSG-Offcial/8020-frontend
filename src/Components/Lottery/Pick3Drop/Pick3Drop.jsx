import React from 'react'
import styles from './Pick3Drop.module.css';

export const Pick3Drop = () => {
    return (
        <div className={styles.Pick3Drop}>
            <div className={styles.lot_nested_div}>
              <p className={styles.para_lot1}>Pick 3 Drop</p>
              <p  className={styles.para_lot2}>Total Active Picks</p>
              <p  className={styles.para_lot3}>0</p>
              <p  className={styles.para_lot4}>Your Active Number</p>
            </div>
            <div className={styles.lot_nested_div}>
            <p className={styles.para_lot1}>Pick 3 Drop</p>
            <p className={styles.para_lot2}>Total Active Picks</p>
              <p className={styles.para_lot3}>0</p>
              <p className={styles.para_lot4}>Your Active Number</p>
            </div>
        </div>
    )
}
