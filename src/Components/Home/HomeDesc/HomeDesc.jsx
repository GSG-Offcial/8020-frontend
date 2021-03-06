import React from 'react';
import style from './HomeDesc.module.css';
import Pdf from '../../pdf/8020Site_Disclaimer.pdf';

export const HomeDesc = () => {
  return (
    <div className={`d-flex align-items-center${style.HomeDesc_mainDiv}`}>
      <div className={`container-fluid`}>
        {/* <div className={`col-11 mx-auto`}> */}
        <div className={`column`}>
          <div className={`d-flex  justify-content-center`}>
            {/* <h1 className={`display-4 fw-bolder`}>DISCLAIMER</h1> */}
          </div>

          <div
            className={`col-lg-8  mt-3 mx-auto d-flex  justify-content-center ${style.HomeDesc_contentDiv}`}
          >
            <p className={`fw-light `}>
              Before purchasing cryptocurrency and participating in the 80/20
              Smart Contract, you must ensure that the nature, complexity and
              risks inherent in the investment arena are suitable for your
              objectives in light of your circumstances and financial position.
              You should not purchase cryptocurrency unless you understand the
              extent of your exposure to potential loss. The 80/20 Smart
              Contract and its affiliates, agents, and sponsors will not be
              liable for any actions taken as a result of your use of this
              website or participation in the 80/20 Smart Contract. For more
              information please read the disclaimer.
            </p>
          </div>
          <div
            className={`col-lg-12 mx-auto d-flex justify-content-center text-center fw-bolder  my-4 ${style.HomeDescButton}`}
          >
            <a href={Pdf} target="_blank">
              <button
                type="button"
                className={`btn text-white  px-5 py-3 ${style.HomeDesc_ORIGButton}`}
              >
                DISCLAIMER
              </button>
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
