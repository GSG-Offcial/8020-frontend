import React,{Fragment} from 'react'
import {SecondComp} from '../SecCom/SecondComp'
import {Link} from 'react-router-dom'
import Group900 from '../../Icons/Group 900.svg'
import './NavBar.css'

export const Navbar = () => {
  return (
    <Fragment>
    <div className="nav-contianer">
      <img src={Group900} alt="Logo" title="Block-Chain Logo" className="main_page_logo" />
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="li"><a href="/#" className="nav-link" id="li-1">Buy</a></li>
          <li className="li"><a href="/#" className="nav-link" id="li-2">How it works</a></li>
        </ul>
      </nav>
           <a href="/#"  id="nav-link-btn"> <button><Link to="/dashboard">Open App</Link> </button> </a>
    </div>
    <SecondComp />
    </Fragment>
  )
}

