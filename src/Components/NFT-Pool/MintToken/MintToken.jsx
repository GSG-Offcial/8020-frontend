import React from 'react'
import styles from './MintToken.module.css'
import nftToken from '../../Gif/nft_tokentop.gif'

export const MintToken = () => {
    return (
        <div className={` ${styles.MintToken_miandiv}`}>
            <h1 className={``}>Mint Access Key Token </h1>
            <div className={`d-flex flex-row align-items-center mt-2   ${styles.nested_div_nft}`}>
                <div className={`container-fluid`}>
                    <div className="row">
                        <div className={`col-lg-6 pt-5  order-lg-1 ${styles.mintoken_imageDiv}`}>
                            <img src={nftToken} alt="" />
                            <p className={`text-center pt-2`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur amet eum deleniti eveniet iste, recusandae error excepturi aperiam exercitationem accusantium libero. Voluptatem reiciendis aperiam perspiciatis mollitia? Dolores optio suscipit dolor.</p>
                        </div>
                        {/* justify-content-center align-items-center */}
                        <div className={`col-lg-6 order-lg-2  text-white d-flex flex-column  ${styles.MintToken_Text}`}>
                            <h2 className={`mb-5`}>
                                GSG Ecosystem Access Key
                            </h2>
                            <p>CURRENT SUPPLY: $10.00 </p>
                            <p>MAX SUPPLY: $20.00</p>
                            <p>SUPPLY RARITY: $30.00</p>
                            <p>GENRE ACCESS: $50.00</p>
                            <p>LEVEL POWER PRICE: $60.00</p>
                            <button
                                type="button"
                                className={`btn btn-primary btn-sm mb-4  ${styles.btn_nft}`}>
                                Buy NFT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}