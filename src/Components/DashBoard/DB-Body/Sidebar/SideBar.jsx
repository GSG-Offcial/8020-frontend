import React from 'react'
import {Link} from 'react-router-dom'
import Group99 from '../../../Icons/Group 900.svg'
import './SideBar.css'
export const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
            <Link to="/"><img src={Group99} alt="Group 900" className="sidebar-icon" /></Link>    
            </div>
            <div >
                <ul className="sidebar-menu">
                <li>
                    <a href="#/" className="active"><span><i className="fas fa-chart-pie"></i></span> <span>DashBoard</span></a>
                    </li>
                    <li>
                    <Link to="/lottery">
                    <a href="#/" className="active"><span><i className="fas fa-ticket-alt"></i></span> <span>Lottery</span> </a>
                    </Link>
                    </li>
                    <li>
                    <a href="#/" className="active"><span><i className="fas fa-atom"></i></span> <span>NFT Pool</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
