import React from 'react';
import styles from './YourReward.module.css';
import { useNftRewardPoolContract } from '../../../Hooks/nftPool';
import { useState } from 'react';
import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { formatValue } from '../../../utils';

export const YourReward = () => {
  const nftContract = useNftRewardPoolContract();
  const [rewards, setRewards] = useState('Loading');
  const { account } = useWeb3React();
  useEffect(async () => {
    if (nftContract) {
      setRewards(formatValue(await nftContract.claimAmount(account)));
    }
  }, [nftContract]);

  function claimReward() {
    nftContract.claimReward();
  }

  function reinvest() {
    nftContract.reinvestInGs50();
  }

  return (
    <div className={`mt-5 ${styles.YourReward_mainDiv}`}>
      <h2 className={`text-white display-5 ${styles.NFTDesc_h2}`}>
        Your Reward
      </h2>
      <div
        className={`row justify-content-center d-flex ${styles.YourRewardnested_div}`}
      >
        <div className={`col-lg-4 col-md-8`}>
          <div className={` ${styles.nested_Div}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              Total Reward Earned
            </p>
            <p className={` ${styles.amount_nft_reward}`}>{rewards} ETH</p>
          </div>
        </div>
        <span>
          <button
            type="button"
            className={`btn btn-primary btn-sm mb-4  ${styles.btn_nftBox}`}
            onClick={claimReward}
          >
            Claim Reward
          </button>
          <button
            type="button"
            className={`btn btn-primary btn-sm mb-4  ${styles.btn_nftBox}`}
            onClick={reinvest}
          >
            Reinvest In Gs50
          </button>
        </span>
      </div>
    </div>
  );
};
