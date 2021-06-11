import React from 'react'
import './BottomTwoBox.css'
export const BottomTwoBox = () => {
    return (
        <div className="bottom-box">
            <div>
           <p className="bottom-para bottom-1">Token you can with draw</p>
           <p>0.1 Eth <span className="span-color">($1000)</span></p>
           <input type="button" value="Withdraw" className="bottom-button"/>
            </div>
            <div>
            <p className="bottom-para bottom-2">Token you can with draw</p>
           <p>0.1 Eth <span className="span-color">($1000)</span></p>
           <input type="button" value="Cycle" className="bottom-button" />
            </div>
        </div>
    )
}
