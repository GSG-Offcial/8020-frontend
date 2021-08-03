import React from 'react'
import styles from './YourReward.module.css'

export const YourReward = () => {
    return (
        <div className={`mt-5 ${styles.YourReward_mainDiv}`}>
            <h2 className={`text-white display-5 ${styles.NFTDesc_h2}`}>
                Your Reward
            </h2>
            <div className={`row justify-content-center d-flex ${styles.YourRewardnested_div}`}>
            <div className={`col-lg-4 col-md-8`}>
                    <div className={` ${styles.nested_Div}`}>
                        <p className={`mt-3 ${styles.para_statis_nft}`}>
                            Total Reward Earned
                        </p>
                        <p className={` ${styles.amount_nft_reward}`}>100 NFT ($100)</p>
                    </div>
                </div>
                <span>
                <button
                                type="button"
                                className={`btn btn-primary btn-sm mb-4  ${styles.btn_nftBox}`}>
                                Unstake
                            </button>
                            <button
                                type="button"
                                className={`btn btn-primary btn-sm mb-4  ${styles.btn_nftBox}`}>
                                Unstake
                            </button>
                            
                </span>
            </div>
        </div>
    )
}
