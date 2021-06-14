import React,{Fragment} from 'react'
import {SecondComp} from '../SecCom/SecondComp'
import {Link} from 'react-router-dom'
import Group900 from '../../Icons/Group 900.svg'
import './NavBar.css'

export const Navbar = () => {
  return (
    <Fragment>
    <div className="contianer-home">
  
    <div>   
       <a className="navbar-brand" href="#/">
      <img src={Group900} alt="" className="mainpage-logo" />
    </a>
    </div>

    <div>
    <ul class="nav justify-content-end" id="home-ul">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#/">Buy</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#/">How it works</a>
  </li>
  </ul>
    </div>
    <div>
    <form class="d-flex">
      <Link to="/dashboard">
     <input type="submit" value="Open App" className="btn" />
     </Link>
    </form>
    </div>
      </div>
    <SecondComp />
    </Fragment>
  )
}

