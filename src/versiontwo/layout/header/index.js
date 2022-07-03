import React from 'react';
import style from "./index.module.css";
import logo from "../../assets/Icons/Group900.svg";

export const Header = () => {
  return (
    <div className={style.updated_header}>
     <div className={style.nested_header}>
           
           <div className={style.img_header}>
             <img src={logo} alt="8020-logo" />
           </div>
           <div className={style.boxes_header}>
             <div className={style.nested_box}>
                <p>Total Deposited - 750 BNB</p>
                <p>Total WithDrawin - 630 BNB</p>
            </div>  
            <div className={style.nested_box}>
                <p>Total Deposited - 750 BNB</p>
                <p>Total WithDrawin - 630 BNB</p>

            </div>
            </div> 
        </div>   
    </div>
  )
}
