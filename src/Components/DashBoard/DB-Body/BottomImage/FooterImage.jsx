import React from 'react'
import './BottomImage.css'
import discord from '../../../Icons/Discord.svg'
import instragram from '../../../Icons/instagram.svg'
import telegram from '../../../Icons/telegram.svg'
import facebook from '../../../Icons/facebook.svg'
import twitter from '../../../Icons/twitter.svg'
import github from '../../../Icons/github.svg'
export const FooterImage = () => {
  return (

    <div className="footer_mainDiv">
      <div className="text-white">
        <ul class="nav justify-content-center fs-4 Footer-ul">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#/">White Paper</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/">Privacy Policy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#/">FAQs</a>
          </li>
        </ul>
      </div>
      <div>
        <ul class="nav justify-content-center nested-divfooter-Image">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#/"><img src={discord} alt="" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/"><img src={telegram} alt="Telegram" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/"><img src={instragram} alt="Instragram" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/"><img src={facebook} alt="Facebook" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/"><img src={twitter} alt="Twitter" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/"><img src={github} alt="Github" /></a>
          </li>

        </ul>
      </div>
    </div>
  )
}
