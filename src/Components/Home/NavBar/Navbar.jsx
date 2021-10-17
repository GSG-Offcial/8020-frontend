import React, { Fragment } from 'react';
import {
  SecondComp,
  BackgroundTopImage,
  ThreeBoxes,
  NFTLaunchpad,
  NFTRewardPool,
  G50DropLottery,
  Tokenomics,
  HomeDesc,
  HomeFooter1,
  HomeFooter2,
  HomeConnect,
  BackgroundBottomImage,
} from '../index';
import { Link } from 'react-router-dom';
import Group900 from '../../Icons/Group 900.svg';
import howItWorks from '../../Images/GS50-distribution.png';
import './NavBar.css';
import Swal from 'sweetalert2';

export const Navbar = () => {
  function popup() {
    Swal.fire({
      imageUrl:
        'https://media.discordapp.net/attachments/752467890690719826/887016750460338186/GS50-distribution.png?width=1214&height=683',
      // icon: 'error',
      width: '50%',
      title: 'Getting Started',
      html: 'In order to participate in the 80/20 Ecosystem, you must first connect your crypto wallet to this website and use the native chain currency to purchase GS50 tokens.  Holding GS50 qualifies your wallet to earn dividends and bonuses based on the number of tokens you hold. You can also earn a commission when clients use your referral link to buy GS50 tokens.  If you do not currently have a cryptocurrency wallet installed please visit <a href="http://www.metamask.io" target="new">MetaMask </a> to download and configure your wallet.  Please remember to protect your private keys and seed words and always keep them in offline storage locations.',
    });
  }

  return (
    <Fragment>
      <div className="contianer-home " id="mainPage-Div">
        <div>
          <a className="navbar-brand" href="#/">
            <img src={Group900} alt="" className="mainpage-logo" />
          </a>
        </div>

        <div>
          <ul class="nav justify-content-end" id="home-ul">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="https://youtu.be/fSIgFZUwh-4"
                target="_blank"
              >
                Video
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                onClick={popup}
                aria-current="page"
                href="#/"
              >
                How it works
              </a>
            </li>
          </ul>
        </div>
        <div>
          <form class="d-flex">
            <Link to="/dashboard">
              <input
                type="submit"
                value="Open App"
                className="btn btn-DashBoard"
              />
            </Link>
          </form>
        </div>
      </div>
      <SecondComp />
      <BackgroundTopImage />
      {/* <div > */}
      <ThreeBoxes />
      <NFTLaunchpad />
      <NFTRewardPool />
      <G50DropLottery />
      <Tokenomics />
      {/* </div> */}
      <HomeDesc />
      <HomeConnect />
      <BackgroundBottomImage />
      <HomeFooter1 />
      <HomeFooter2 />
    </Fragment>
  );
};
