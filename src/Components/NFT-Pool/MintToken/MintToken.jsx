import React from 'react'
import styles from './MintToken.module.css'
import nftToken from '../../Gif/nft_tokentop.gif'

export const MintToken = () => {
    return (
        <div className={styles.MintToken_miandiv}>
            <h1 className="">Mint Access Key Token </h1>
            <div className={`d-flex flex-row align-items-center mt-4   ${styles.nested_div_nft}`}>
                <div className={`container-fluid`}>
                    <div className="row">
                        <div className={`col-lg-6 pt-5 pb-5 order-lg-1 ${styles.mintoken_imageDiv}`}>
                            <img src={nftToken} alt="" />
                        </div>
                        {/* justify-content-center align-items-center */}
                        <div className={`col-lg-6 order-lg-2  text-white d-flex flex-column  ${styles.MintToken_Text}`}>
                            <h2>
                                Access Key
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}