import React, { useState } from 'react';
import styles from './HomeFooter1.module.css';
import discord from '../../../Icons/Discord.svg';
import telegram from '../../../Icons/telegram.svg';
import instragram from '../../../Icons/instagram.svg';
import facebook from '../../../Icons/facebook.svg';
import github from '../../../Icons/github.svg';
import twitter from '../../../Icons/twitter.svg';

export const HomeFooter1 = () => {
  return (
    <div className={styles.HomeFooter1_mainDiv}>
      <div className={`text-white`}>
        <ul
          class={`nav justify-content-center fs-4 fw-bolder ${styles.HomeFooter1_Content}`}
        >
          <li class="nav-item ">
            <a
              class="nav-link "
              x
              aria-current="page"
              href="https://firebasestorage.googleapis.com/v0/b/the-8020-ecosystem.appspot.com/o/TheGSGFoundation_GS50_Token_WhitePaper.pdf?alt=media&token=af86a07a-b516-4568-a137-1e53e350685a"
            >
              White Paper
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="mailto: contact@the8020.io">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/">
              Privacy Policy
            </a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link " href="#/">
              FAQs
            </a>
          </li> */}
        </ul>
      </div>
      <div>
        <ul class={`nav justify-content-center ${styles.HomeFooter1_Icons}`}>
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              href="https://discord.gg/YwEpXzk"
            >
              <img src={discord} alt="Discord" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://t.me/the8020contract">
              <img src={telegram} alt="Telegram" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://instagram.com/the8020contract">
              <img src={instragram} alt="Instragram" />
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.facebook.com/The-8020-Smart-Contract-101861485063236"
            >
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://twitter.com/the8020contract">
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/GSG-Offcial">
              <img src={github} alt="Github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
