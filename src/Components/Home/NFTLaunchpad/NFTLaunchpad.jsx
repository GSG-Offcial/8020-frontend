import React from 'react'
import styles from './NFTLaunchpad.module.css'
import NFTLaunchpadformusic from '../../Images/NFTLaunchpadformusic.svg'


export const NFTLaunchpad = () => {
    return (
        <section className={`${styles.NFT_mainDiv} d-flex align-items-center`}>
            <div className={`container-fluid`}>
                <div className={`row`}>
                    <div className={`col-10 mx-auto`}>
                        <div className="row">
                            <div className={`col-lg-6 ${styles.NFTLaunchpad_image}`}>
                                <img src={NFTLaunchpadformusic} alt="" />
                            </div>
                            <div className={`col-md-6 pt-5 pt-lg-0 text-white d-flex justify-content-center flex-column ${styles.NFTLaunchpad_secondDiv}`}>
                                <h2 className={`display-5 fw-bolder`}>NFT Launchpad for music, art,
                                    and visual creators.</h2>
                                <p className={`px-4 py-3 ${styles.NFT_para}`}>
                                    <span className={`fw-light`}>
                                    The NFT launchpad will host drops and sales for
                                    emerging creators approved by the platform.
                                    Our mission is to help new creators learn how to
                                    leverage NFT technology and also to generate
                                    income and dividends for GS50 holders
                                    </span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}
