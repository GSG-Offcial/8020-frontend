import React, { useEffect } from 'react';
import styles from './NFTLaunchpad.module.css';
import NFTLaunchpadformusic from '../../Images/NFTLaunchpadformusic.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const NFTLaunchpad = () => {
  useEffect(() => {
    Aos.init({
      duration: 1400,
      easing: 'ease-in-sine',
      once: false,
    });
  });

  return (
    <section className={`${styles.NFT_mainDiv} d-flex align-items-center`}>
      <div className={`container-fluid`}>
        <div className={`row`}>
          <div className={`col-10 mx-auto`}>
            <div className="row">
              <div
                data-aos="fade-right"
                className={`col-lg-6  ${styles.NFTLaunchpad_image}`}
              >
                <img src={NFTLaunchpadformusic} alt="" />
              </div>
              <div
                data-aos="fade-left"
                className={`col-md-6 pt-5 pt-lg-0 text-white d-flex justify-content-center flex-column ${styles.NFTLaunchpad_secondDiv}`}
              >
                <h2 className={`display-5 fw-bolder`}>
                  NFT Launchpad for music, art, and visual creators.
                </h2>
                <p className={`px-4 py-3 ${styles.NFT_para}`}>
                  <span className={`fw-light`}>
                    The NFT launchpad will host drops and sales for emerging
                    creators approved by out platform. Our mission is to help
                    new creators learn how to leverage NFT technology and also
                    to generate income and dividends for GS50 holders
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
