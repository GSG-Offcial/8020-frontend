import React, { Fragment } from 'react'
import './DashBoardNavbar.css'
import { FourBox, SideBar, TwoBox, BottomFourBox, BottomTwoBox, Desclaimer, FooterImage} from '../DB-Body/index'



export const DashBoardNavbar = () => {
    return (
        <Fragment>
            {/* <div className="dashboard-contianer">
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
            </div> */}
            <div className="contianer-home" id="lotter-maindiv">

<div>
    <h1><span className="badge header-heading">DashBoard</span></h1>
</div>

<div>
    <ul className="nav justify-content-end" id="home-ul">
        <li className="nav-item" id="lottery-li">
            <a className="nav-link active" aria-current="page" href="#/">Dashboard</a>
        </li>
        <li className="nav-item" id="lottery-li2">
            <a className="nav-link active " aria-current="page" href="#/">Your spons ID: 0x02354309</a>
        </li>
        <li className="nav-item" id="lottery-li3">
            <a className="nav-link active" aria-current="page" href="#/">Copy Ref. link</a>
        </li>
    </ul>
</div>
<div>
    <form class="d-flex">
        <input type="submit" value="Connect" className="lottery-btn" />
    </form>
</div>
</div>
            <SideBar />
            <FourBox />
            <TwoBox />
            <BottomFourBox />
            <BottomTwoBox />
            <Desclaimer />
            <FooterImage />
        </Fragment>
    )
}
