import React from 'react';
import styles from './FiveNFTBox.module.css';

export const FiveNFTBox = () => {
    return (
        <div className={` ${styles.FiveNFTBox_mainDiv}`}>
            <h1>Stake your NFT</h1>
            {/* five Box */}
            <div className={`row justify-content-center d-flex ${styles.nested_FiveBox}`}>
                <div className={`col-lg-4 col-md-12`}>
                    <div className={` ${styles.firstBox}`}>
                        <p className={`mt-3 ${styles.para_statis_nft}`}>
                            Total NFT Staked
                        </p>
                        <p className={` ${styles.amount_nft}`}>100 NFT ($100)</p>
                    </div>
                </div>

                <div className={` col-lg-4 col-md-12`}>
                    <div className={` ${styles.firstBox}`}>
                        <p className={`mt-3 ${styles.para_statis_nft}`}>
                            Total NFT Staked
                        </p>
                        <p className={` ${styles.amount_nft}`}>100 NFT ($100)</p>
                    </div>
                </div>
                <div className={`col-lg-4 col-md-12`}>
                    <div className={` ${styles.firstBox}`}>
                        <p className={`mt-3 ${styles.para_statis_nft}`}>
                            Total NFT Staked
                        </p>
                        <p className={` ${styles.amount_nft}`}>100 NFT ($100)</p>
                    </div>
                </div>
                <div className={`col-lg-4 col-md-12`}>
                    <div className={` ${styles.firstBox}`}>
                        <p className={`mt-3 ${styles.para_statis_nft}`}>
                            Total NFT Staked
                        </p>
                        <p className={` ${styles.amount_nft}`}>100 NFT ($100)</p>
                    </div>
                </div>

                <div className={`col-lg-4 col-md-12`}>
                    <div className={` ${styles.firstBox}`}>
                        <p className={`mt-3 ${styles.para_statis_nft}`}>
                            Total NFT Staked
                        </p>
                        <p className={` ${styles.amount_nft}`}>100 NFT ($100)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
