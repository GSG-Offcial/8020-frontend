import React from 'react';
import styles from './LotDesclaimer.module.css';

export const LotDesclaimer = () => {
  return (
    <div className={`mt-5 mb-5 ${styles.LotDesclaimer_mainDiv}`}>
      <div className={styles.desc_content}>
        Before purchasing cryptocurrency and participating in the 80/20 Smart
        Contract, you must ensure that the nature, complexity and risks inherent
        in the investment arena are suitable for your objectives in light of
        your circumstances and financial position. You should not purchase
        cryptocurrency unless you understand the extent of your exposure to
        potential loss. The 80/20 Smart Contract and its affiliates, agents, and
        sponsors will not be liable for any actions taken as a result of your
        use of this website or participation in the 80/20 Smart Contract. For
        more information please read the disclaimer.
        <div className={`text-center ${styles.lot_descButtonDiv}`}>
          <button
            type="button"
            className={`btn  btn-lg text-white mt-3 ${styles.lot_descbutton}`}
          >
            DISCLAIMER
          </button>
        </div>
      </div>
    </div>
  );
};
