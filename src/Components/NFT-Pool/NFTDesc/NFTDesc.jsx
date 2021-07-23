import React from 'react'
import styles from './NFTDesc.module.css'

export const NFTDesc = () => {
    return (
        <div className={`mt-4 mb-4 ${styles.NFTDesc_mainDiv}`}>
            <h2 className={`text-white display-5 ${styles.NFTDesc_h2}`}>
                DISCLAMER
            </h2>
            <div className={`text-white ${styles.desc_contentNFT}`}>
                Before purchasing cryptocurrency and participating in the 80/20 Smart
                Contract, you must ensure that the nature, complexity and risks inherent in the
                investment arena are suitable for your objectives in light of your circumstances
                and financial position. You should not purchase cryptocurrency unless you
                understand the extent of your exposure to potential loss. The 80/20 Smart
                Contract and its affiliates, agents, and sponsors will not be liable for any actions
                taken as a result of your use of this website or participation in the 80/20 Smart
                Contract. For more information please read the disclaimer.


                <div className={`mt-5 text-center ${styles.nft_descButtonDiv}`}>
                 <button type="button" className={`btn  btn-lg text-white mt-3 ${styles.nft_descbutton}`}>DESCLAMIER</button>
                 </div>
            </div>
        </div>
    )
}
