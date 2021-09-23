import React from 'react';
import './BottomImage.css';
import discord from '../../../Icons/Discord.svg';
import instragram from '../../../Icons/instagram.svg';
import telegram from '../../../Icons/telegram.svg';
import facebook from '../../../Icons/facebook.svg';
import twitter from '../../../Icons/twitter.svg';
import github from '../../../Icons/github.svg';
import Pdf from '../../../pdf/whitepaper.pdf';

export const FooterImage = () => {
  return (
    <div className="footer_mainDiv">
      <div className="text-white">
        <ul class="nav justify-content-center fs-4 Footer-ul">
          <li class="nav-item ">
            <a
              class="nav-link "
              x
              aria-current="page"
              href={Pdf}
              target="_blank"
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
        </ul>
      </div>
      <div>
        <ul class="nav justify-content-center nested-divfooter-Image">
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
