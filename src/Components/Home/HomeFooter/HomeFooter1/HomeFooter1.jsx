import React from 'react';
import styles from './HomeFooter1.module.css'
import discord from '../../../Icons/Discord.svg'
import telegram from '../../../Icons/telegram.svg'
import instragram from '../../../Icons/instagram.svg';
import facebook from '../../../Icons/facebook.svg';
import github from '../../../Icons/github.svg';
import twitter from '../../../Icons/twitter.svg';

export const HomeFooter1 = () => {
    return (
        <div className={styles.HomeFooter1_mainDiv}>
            <div className={`text-white`}>
        <ul class={`nav justify-content-center fs-4 fw-bolder ${styles.HomeFooter1_Content}`}>
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
        <ul class={`nav justify-content-center ${styles.HomeFooter1_Icons}`}>
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