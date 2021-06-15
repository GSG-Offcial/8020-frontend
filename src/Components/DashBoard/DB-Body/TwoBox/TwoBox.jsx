
import React,{useState} from 'react';
import './TwoBox.css';
export const TwoBox = () => {

const [state,setState]=useState("Buy")

    return (

        <div className="two-box">
            <div>
                <ul className="twobox-ul">
                    <li className="button button-1" onClick={()=> setState(state && "Buy" )}>Buy</li>
                    <li className="button button-2" onClick={() => setState(state && "Sell")}>Sell</li>
                </ul>
               
                <input class="form-control form-control-lg token-input" type="number" placeholder="Token" aria-label=".form-control-lg example"/>
             
 
                <p className="box-para">You will give 1000 Token</p>
                
                    <form class={`d-flex`}>
                    <button type="submit"className={`token-buy-button btn-lg btn-outline-success `} >{state}</button>
                </form>
            </div>
            <div>
                <h1>Hello</h1>
            </div>
        </div>

    )
}
// import React from 'react';
// import './TwoBox.css';
// export const TwoBox = () => {
//   return (
//     <div className="two-box">
//       <div>
//         <ul className="twobox-ul">
//           <li className="button button-1">Buy</li>
//           <li className="button button-2">Sell</li>
//         </ul>

//         <ul className="second-ul">
//           <li className="links link-1">Enter ETN</li>
//           <li className="links link-2">Max</li>
//         </ul>

//         <p className="box-para">You will give 1000 Token</p>
//         <form>
//           <input type="submit" value="Buy" className="buy-button" />
//         </form>
//       </div>
//       <div>
//         <h1>Hello</h1>
//       </div>
//     </div>
//   );
// };
