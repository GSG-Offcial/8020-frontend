import React from 'react'
import styles from './BottomTwoBox.module.css' 
export const BottomTwoBox = () => {
    return (
        <div className={`${styles.main_BottomTwoBox} row`}>
            <div className="col-lg-6 col-md-12">
            <div className={styles.BottomTwoBox_nesteddiv}>
              <p>Last Pick 3 Numbers</p>
              <p className={styles.nub_bottomTwoBox}>9 7 5</p>
            </div>
            </div>

            <div className="col-lg-6 col-md-12">
                <div className={styles.BottomTwoBox_nesteddiv}>
             <p>Last Pick 4 Numbers</p>
               <p className={styles.nub_bottomTwoBox}>8 2 2 9</p>
                </div>
            </div>
        </div>
    )
}
