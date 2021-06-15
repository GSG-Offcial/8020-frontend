import React,{useState} from 'react';
import './TwoBox.css';
export const TwoBox = () => {

const [state,setState]=useState("Buy")
// const setStateFunc=(e) =>{
//     e.preventDefault();
//     setState(state? "Buy" : "Sell")
// }

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
