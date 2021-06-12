import React from 'react'
import BottomImage from '../../../Images/background bottom.svg'
import './BottomImage.css'
import discord from '../../../Icons/Discord.svg'
import instragram from '../../../Icons/instagram.svg'
import telegram from '../../../Icons/telegram.svg'
import facebook from '../../../Icons/facebook.svg'
import twitter from '../../../Icons/twitter.svg'
import github from '../../../Icons/github.svg'

export const FooterImage = () => {
    return (
        <div className="footer">
            <div>
                <img src={BottomImage} alt="" className="footerbottom-image" />
            </div>
            <div className="footer-div2">
                <ul className="footer-ul">

                    <li className="icons icon1"><span>White Paper</span> </li>
                    <li className="icons icon2"><span>Contact</span> </li>
                    <li className="icons icon3"><span>Privacy Policy</span> </li>
                    <li className="icons icon4">FAQs</li>

                </ul>
                <div className="nested-divfooter">
                    <img src={discord} alt="" />
                    <img src={instragram} alt="" />
                    <img src={telegram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={github} alt="" />
                </div>
            </div>

        </div>
    )
}
