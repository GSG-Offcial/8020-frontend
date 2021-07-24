import React from 'react'
import styles from './NFTBottomImage.module.css'
import NFTBottomImageBG from '../../Images/background bottom.svg'
export const NFTBottomImage = () => {
    return (
        <div className={` ${styles.NFTBottomImage_mainDiv}`}>
            <img src={NFTBottomImageBG} alt="" className={` ${styles.NFTBottomImage_image}`} />
        </div>
    )
}
