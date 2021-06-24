import React from 'react';
import styles from './ThreeBoxes.module.css';
import FirstImage from '../../Icons/Decentralized.svg';
import NFTImage from '../../Icons/NFT Launchpad.svg';
import EarnImage from '../../Icons/Earn Passive Income.svg';
export const ThreeBoxes = () => {
  return (
    // <div>
    <div
      class={` row  col-12  justify-content-center text-white mt-5 mb-5  ${styles.mainThreeBox_cont} `}
    >
      {/* <div class={`row justify-content-center text-white   ${styles.ThreeBoxes_mainDiv}`}> */}
      <div class={`col-lg-3 col-md-5 col-sm-12 pt-md-4 `}>
        <span className={`px  fs-4 fw-bolder`}>
          <img src={FirstImage} alt="" />
          <span className={`px-2`}>Decentralized </span>
        </span>
        <p className={`px-2 pt-2 fw-lighter`}>
          Powered by blockchain technology on publicly accessible networks.
        </p>
      </div>
      <div class="col-lg-3 col-md-5 col-sm-12 pt-md-4">
        <span className={`px-2  fs-4 fw-bolder`}>
          <img src={NFTImage} alt="" />
          <span className={`px-2`}>NFT Launchpad</span>
        </span>
        <p className={`px-2 pt-2 fw-lighter`}>
          NFT drops from professional Video, Graphic, and Photographic creators
        </p>
      </div>
      <div class="col-lg-3 col-md-5 col-sm-12 pt-md-4">
        <span className={`px-2  fs-5 fw-bolder`}>
          <img src={EarnImage} alt="" />
          <span className={`px-2`}>Earn Passive Income </span>
        </span>
        <p className={`px-2 pt-2 fw-lighter`}>
          Built on BSC,Matic for fast, secure, and low cost transactions.
        </p>
      </div>
    </div>
    // </div>
    // </div>
  );
};
