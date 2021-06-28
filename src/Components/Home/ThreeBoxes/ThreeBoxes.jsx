import React from 'react';
import styles from './ThreeBoxes.module.css';
import FirstImage from '../../Icons/Decentralized.svg';
import NFTImage from '../../Icons/NFT Launchpad.svg';
import EarnImage from '../../Icons/Earn Passive Income.svg';
// import Aos from 'aos'
// import { useEffect } from 'react';



export const ThreeBoxes = () => {
  


    return (

        <div className={`container ${styles.ThreeBox_mainDiv}`}>
        <div class={` row  justify-content-center text-white  mb-5  ${styles.mainThreeBox_cont} `}>
                <div class={`col  pt-md-4 ${styles.firstBox}`}>
                    <span className={`px-3  fs-4 fw-bolder`}><img src={FirstImage} alt="" /><span className={`px-2`}>Decentralized </span></span>
                    <p className={`px-3 pt-2 fw-lighter`}>Powered by blockchain technology on publicly
                        accessible networks.</p>
                </div>
                <div class={`col  pt-md-4 ${styles.SecondBox}`}>
                    <span className={`px-3  fs-4 fw-bolder`}><img src={NFTImage} alt="" /><span className={`px-2`}>NFT Launchpad</span></span>
                    <p className={`px-3 pt-2 fw-lighter`}>NFT drops from professional  Video, Graphic,
                        and Photographic creators</p>
                </div>
                <div className={`col  pt-md-4 ${styles.ThreeBoxes}`}>
                    <span className={`px-3  fs-4 fw-bolder`}><img src={EarnImage} alt="" /><span className={`px-2`}>Earn Passive Income </span></span>
                    <p className={`px-3 pt-2 fw-lighter`}>Built on BSC,Matic for fast, secure, and low cost
                        transactions.</p>
                </div>
            </div>
         </div>
    )
}

