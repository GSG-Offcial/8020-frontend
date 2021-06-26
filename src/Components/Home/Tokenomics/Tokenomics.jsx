import React,{useEffect} from 'react'
import styles from './Tokenomics.module.css'
import TokenomicsImage from '../../Images/Tokenomics 2.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'



export const Tokenomics = () => {
    useEffect(() =>{
        Aos.init({
            duration: 1500,easing: 'ease-in-sine', once: false,
                      
         })
    })
    return (
        <div className={`d-flex align-items-center ${styles.Tokenomics_mainDiv}`}>
            <div className={`container-fluid ${styles.Tokenomics_RowDiv}`}>
                <div className={`col-10 mx-auto `}>
                    <div className={`row `}>
                        <div  data-aos="fade-right" className={`col-lg-6 order-lg-1 pt-5 d-flex justify-content-center ${styles.Tokenomics_Image}`}>
                            <img src={TokenomicsImage} alt="" />
                        </div>
                        <div data-aos="fade-left" className={`col-lg-6 pt-4 pt-lg-0 order-lg-2 d-flex justify-content-center flex-column ${styles.Tokenomics_text}`}>
                            <h1 className={`display-4 fw-bolder`}>Tokenomics</h1>
                            
                            <ul className={`text-white`}>
                                <li>
                                <i class={`fas fa-star ${styles.Tokenomics_starLOGO}`}></i>
                                   80% of every GS50 purchase is locked in the smart contract
                                    to provide liquidity for GS50 tokens. 20% of the purchase is
                                    used to operate the economy for holders, stakers,
                                    developers, and creators.
                                    
                                </li>
                                <li>
                                <i class={`fas fa-star ${styles.Tokenomics_starLOGO}`}></i>
                                    GS50 tokens can be sold back to the smart contract in
                                    exchange for ETH, BSC, or MATIC.
                                </li>
                                <li>
                                <i class={`fas fa-star ${styles.Tokenomics_starLOGO}`}></i>
                                    GS50 tokens can be used to buy NFT's, play games, and gift
                                    to other.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
