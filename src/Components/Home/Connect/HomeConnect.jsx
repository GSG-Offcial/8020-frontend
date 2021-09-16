import React from 'react';
import styles from './HomeConnect.module.css';
import STAYINTOUCH from '../../Images/STAYINTOUCH.svg';

export const HomeConnect = () => {
  return (
    <div className={`d-flex align-items-center  ${styles.HomeConnect_mainDiv}`}>
      <div className={`container-fluid mt-4`}>
        <div className={`col-10 mx-auto`}>
          <div className={`column`}>
            <div
              className={`d-flex justify-content-center ${styles.HomeConnect_Image}`}
            >
              <img src={STAYINTOUCH} alt="" />
            </div>
            <div className={`d-flex justify-content-center mt-3`}>
              <h1 className={`display-4 fw-bolder`}>STAY IN TOUCH!</h1>
            </div>
            <div
              class={` d-flex justify-content-center  align-items-center mt-5 mb-5 col-lg-8 mx-auto  ${styles.HomeConnect_ButtonDiv}`}
            >
              <input
                type="email"
                placeholder="email..."
                className={`mr-5 form-control  ${styles.Input_text}`}
              />
              <input
                type="submit"
                href="mailto: contact@the8020.io"
                value="Submit"
                className={`fw-bolder text-white fs-3 ${styles.Input_button}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
