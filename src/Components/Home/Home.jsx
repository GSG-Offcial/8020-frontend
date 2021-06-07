import React from 'react'
import Group900 from '../Icons/Group 900.svg'
import  './Home.css'



export const Home = () => {
    return (
        <div className="nav-contianer">
            <nav className="navbar">
              <img src={Group900} alt="Logo" title="Block-Chain Logo" className="main_page_logo"/>
              <ul className="nav-menu">
              <li><a href="#" className="nav-link">Buy</a></li>
              <li><a href="#" className="nav-link">How it works</a></li>
              <li><a href="#" className="nav-link nav-link-btn">Open App</a></li>
             </ul>
            </nav>
        </div>
    )
}

