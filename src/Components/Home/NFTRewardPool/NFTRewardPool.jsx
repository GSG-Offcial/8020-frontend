import React from 'react'
import styles from './NFTRewardPool.module.css'
import NFTrewardpool from '../../Images/NFTRewardPool.svg'


export const NFTRewardPool = () => {
    return (
        <div className={`d-flex align-item-center ${styles.NFTRewardPool_mainDiv}`}>
            <div className={`container-fluid`}>
                {/* <div className={`row`}> */}
                    <div className={`col-10 mx-auto  ${styles.NFTRewardPool}`}>
                        <div className={`row`}>
                            <div className={`col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ${styles.NFTRewardPool_FirstDiv}`}>
                                <h1 className={`display-5 fw-bolder`}>NFT Reward Pool</h1>
                                <p className={`px-4 py-3 ${styles.NFTRewardPool_para}`}>
                                    <span className={`fw-light`}>
                                    The NFT Pool takes in 3% of all GS50 sales.
                                    Holders of the GSG special Access Token can
                                    stake their NFT to receive rewards from this pool.
                                    There are only 500 NFT's available to be staked
                                    in this pool. Once the NFT's are gone you will
                                    have to buy them in the open market.
                                    </span>
                                </p>
                            </div>
                            <div className={`col-lg-6 order-1 order-lg-2 ${styles.NFTRewardPool_Image}`}>
                              <img src={NFTrewardpool} alt="" />
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}
