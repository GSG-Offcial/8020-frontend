import React from 'react'
import styles from './BackgroundTopImage.module.css'
import TopImage from '../../Images/Backgroundtop.svg'

export const BackgroundTopImage = () => {
    return (
        <div className={` ${styles.BackgroundTopImage_mainDiv}`}>
           <img src={TopImage} alt="" /> 
        </div>
    )
}
