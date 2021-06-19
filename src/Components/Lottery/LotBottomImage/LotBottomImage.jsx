import React from 'react'
import styles from './LotBottomImage.module.css'
import LotBottomImages from '../../Images/background bottom.svg'

export const LotBottomImage = () => {
    return (
        <div className={` ${styles.BottomImage_mainDiv}`}>
            <img src={LotBottomImages} alt="" className={styles.LotBottomImage}/>
        </div>
    )
}
