import React from 'react'
import styles from './BottomTwoBox.module.css'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const BottomTwoBox = () => {
    return (
        <div className={styles.bottom_box}>
            <div>
           <p className={styles.bottom_para}>Token you can with draw</p>
           <p>0.1 Eth <span className={styles.span_color}>($1000)</span></p>
           {/* <input type="button" value="Withdraw" className={styles.bottom_button}/> */}
           <button type="button" class={`btn btn-primary btn-sm ${styles.bottom_button}`}>Withdraw</button>
            </div>
            <div>
            <p className={styles.bottom_para}>Token you can with draw</p>
           <p>0.1 Eth <span className={styles.span_color}>($1000)</span></p>
           {/* <input type="button" value="Cycle" className={styles.bottom_button} /> */}
           <button type="button" className={`btn btn-primary btn-sm ${styles.bottom_button}`}>Cycle</button>

            </div>
        </div>
    )
}
