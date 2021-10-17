import React from 'react';
import styles from './SecondComp.module.css';
import AnimationBitCoin from '../../Images/bitcoinanimation.svg';

export const SecondComp = () => {
  return (
    <section id={styles.header} className={`d-flex align-items-center mb-5 `}>
      <div className={`container-fluid`}>
        <div className={`row`}>
          <div className={`col-11 mx-auto`}>
            <div className={`row`}>
              <div
                className={`col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column ${styles.SecondComp_Div1}`}
              >
                <h1>A Wealth Distribution System for Creators and Investors</h1>
                <p className={`my-3 ${styles.paragrap_1}`}>
                  The 80/20 Contract pays holders dividends in ETH, BSC, and
                  MATIC when users buy or sell GS50 tokens. The GS50 is the
                  native currency in The 80/20 Ecosystem.
                </p>
              </div>

              <div
                className={`col-lg-6 order-2 order-lg-2  ${styles.SecondComp_ImageDiv}`}
              >
                <img
                  src={AnimationBitCoin}
                  alt=""
                  className={` ${styles.SecondComp_Image}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
