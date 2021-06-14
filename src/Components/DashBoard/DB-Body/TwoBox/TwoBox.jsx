import React from 'react'
import './TwoBox.module.css'
export const TwoBox = () => {
    return (
             
        <div className="two-box">
            <div>
               <ul className="twobox-ul">
                   <li className="button button-1">Buy</li>
                   <li className="button button-2">Sell</li>
               </ul>
          
                <ul className="second-ul">
                    <li className="links link-1">Enter ETN</li>
                    <li className="links link-2">Max</li>
                </ul>
           
                <p className="box-para">You will give 1000 Token</p>
                <form>
                <input type="submit" value="Buy" className="buy-button" />
              
                </form>
            </div>
            <div>
         <h1>Hello</h1>
        </div>
        </div>
     
    )
}
