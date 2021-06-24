import React from 'react'
import styles from './BackgroundBottomImage.module.css'
import BackgrounBottomImg from '../../Images/background bottom.svg'


export const BackgroundBottomImage = () => {
    return (
        <div className={` ${styles.BackgroundBottomImage_mainDiv}`}>
                       <img src={BackgrounBottomImg} alt="" /> 
        </div>
    )
}
