import React from 'react'
import   './LotterySideBar.css'
import Group99 from '../../Icons/Group 900.svg' 
import {Link} from 'react-router-dom'
export const LotterySideBar = () => {
    return (
        <div  className="lot_sidebar">
            <div className="lot_logo">
            <Link to="/"><img src={Group99} alt="Group 900" /></Link>    
            </div>
            <div >
                <ul className="lot_sidebar_menu">
                <li>
                    <a href="#/" className="lot-active"><span><i className="fas fa-chart-pie"></i></span> <span>DashBoard</span></a>
                    </li>
                    <li>
                    <Link to="/lottery">
                    <a href="#/" className="lot-active"><span><i className="fas fa-ticket-alt"></i></span> <span>Lottery</span> </a>
                    </Link>
                    </li>
                    <li>
                    <a href="#/" className="lot-active"><span><i className="fas fa-dice-d20"></i></span> <span>NFT Pool</span></a>
                    </li>
                </ul>
            </div>
            

        </div>
    )
}
