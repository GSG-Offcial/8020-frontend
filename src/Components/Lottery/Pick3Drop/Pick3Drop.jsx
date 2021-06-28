import React from 'react'
import styles from './Pick3Drop.module.css';

export const Pick3Drop = () => {
  return (
    <div className={styles.Pick3Drop}>
      <div className={styles.lot_nested_div}>
        <p className={styles.para_lot1}>Pick 3 Drop</p>
        <p className={styles.para_lot2}>Total Active Picks</p>
        <p className={styles.para_lot3}>0</p>
        <p className={styles.para_lot4}>Your Active Number</p>
    
        <div class={`row col-10 col-md-10 mx-auto mb-4 user-pick-lottery-numbers ${styles.user_pick_lottery_numbers}`}>
          <div class="col mx-auto">
            <div class={`card p-2 m-1 text-white fw-bolder fs-4 ${styles.nestedDiv_LotteryNumber}`}>123345</div>
          </div>

        </div>
      </div>
      <div className={styles.lot_nested_div}>
        <p className={styles.para_lot1}>Pick 3 Drop</p>
        <p className={styles.para_lot2}>Total Active Picks</p>
        <p className={styles.para_lot3}>0</p>
        <p className={styles.para_lot4}>Your Active Number</p>
        <div class={`row col-10 col-md-10 mx-auto mb-4 user-pick-lottery-numbers ${styles.user_pick_lottery_numbers}`}>
          <div class="col mx-auto">
            <div class={`card p-2 m-1 text-white fw-bolder fs-4 ${styles.nestedDiv_LotteryNumber}`}>123345</div>
          </div>

        </div>
      </div>

    </div>
  )
}
