import React from 'react'
import './SecondComp.css'
import AnimationBitCoin from '../../Images/bitcoinanimation.svg'


export const SecondComp = () => {


    return (
        <div>
        <div className="second-div">
            <div className="items" id="item-text">
                <h1>
                    A Wealth Distribution System for
                    Creators and Investors
                 </h1>
                <p className="paragrap-1">
                    The 80/20 Contract pay’s holders divedends in ETH, BSC, and MATIC
                    when users buy or sell GS50 tokens. The GS50 is the native currency in
                    The 80/20 Ecosystem.
                 </p>
            </div>
                <img src={AnimationBitCoin} alt="BitCoin"  className="BitCoin-Image"/>

        </div>
     
        </div>
    )
}
