import React from 'react'
import styles from './Footer.module.css';
import discord from '../../../Icons/Discord.svg'
import telegram from '../../../Icons/telegram.svg'
import instragram from '../../../Icons/instagram.svg';
import facebook from '../../../Icons/facebook.svg';
import github from '../../../Icons/github.svg';
import twitter from '../../../Icons/twitter.svg';


export const FooterImages = () => {
  return (
    <div className={styles.FooterImages_mainDiv}>
      <div className={`text-white`}>
        <ul class={`nav justify-content-center fs-4 ${styles.Footer_lis}`}>
          <li class="nav-item ">
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
        <ul class={`nav justify-content-center ${styles.Footer_images_SM}`}>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#/"><img src={discord} alt="Discord" /></a>
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
