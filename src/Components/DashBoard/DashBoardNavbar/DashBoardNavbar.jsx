import React,{Fragment} from 'react'
import './DashBoardNavbar.css'
import{FourBox,SideBar,TwoBox} from '../DB-Body/index'



export const DashBoardNavbar = () => {
    return (
        <Fragment>
        <div className="dashboard-contianer">
            <h1 className="h1">Dashboard </h1>
            <div>
                <nav>
                    <ul className="para-item">
                    <li className="para" id="para-1">Dashboard</li>
                    <li className="para" id="para-2">Your spons ID: 0x02354309 </li>
                    <li className="para" id="para-3">Copy Ref. link</li>
                    </ul>
                </nav>

            </div>
            <div>
                <form>
                    <input type="submit" value="Connect" className="dasboard-button" />
                </form>
            </div>
        </div>
        <SideBar/>

        <FourBox/>
        <TwoBox/>
        </Fragment>
    )
}
