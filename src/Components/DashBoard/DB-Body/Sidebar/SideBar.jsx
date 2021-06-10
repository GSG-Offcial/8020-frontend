import React from 'react'
// import { GrPieChart } from 'react-icons/gr';
// import {FaTicketAlt,FaChartPie} from 'react-icons/fa'
import Group99 from '../../../Icons/Group 900.svg'
import './SideBar.css'
export const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={Group99} alt="Group 900" className="sidebar-icon" />
            </div>
            <div >
                <ul className="sidebar-menu">
                <li>
                    <a href="#/" className="active"><span><i className="fas fa-chart-pie"></i></span> <span>DashBoard</span></a>
                    </li>
                    <li>
                    <a href="#/" className="active"><span><i className="fas fa-ticket-alt"></i></span> <span>Lottery</span></a>
                    </li>
                    <li>
                    <a href="#/" className="active"><span><i className="fas fa-atom"></i></span> <span>NFT Pool</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
