import React from 'react';
import styles from './YourReward.module.css';
import { useNftCommunityRewardPoolContract } from '../../../Hooks/nftPool';
import { useState } from 'react';
import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { formatValue } from '../../../utils';
import { NFTTable } from '../index';
import tip from '../../Images/tip.png';

export const YourReward = () => {
  const nftContract = useNftCommunityRewardPoolContract();
  const [rewards, setRewards] = useState('Loading');
  const [rewardData, setRewardData] = useState([]);
  const [currency, setCurrency] = useState('loading');

  const { account, chainId } = useWeb3React();
  useEffect(async () => {
    if (nftContract) {
      if (chainId === 80001 || chainId === 137) {
        setCurrency('MATIC');
      } else if (chainId === 56 || chainId === 97) {
        setCurrency('BNB');
      } else {
        setCurrency('ETH');
      }
      setRewards(String(await nftContract.claimAmount(account)));

      const rewardEvents = await nftContract.queryFilter(
        nftContract.filters.RewardClaim()
      );
      rewardEvents.map((e) => {
        setRewardData((prevData) => [
          ...prevData,
          ,
          {
            time: String(e.args.time),
            amount: String(e.args.amount),
            address: String(e.args.userAddress),
          },
        ]);
      });
    }
  }, [nftContract]);

  function claimReward() {
    nftContract.claimReward();
  }

  return (
    <div className={`mt-5 ${styles.YourReward_mainDiv}`}>
      <div
        className={`row justify-content-center d-flex ${styles.YourRewardnested_div}`}
      >
        <div className={`col-lg-4 col-md-8`}>
          <div className={` ${styles.nested_Div}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              Total Reward Earned
            </p>
            <p className={` ${styles.amount_nft_reward}`}>
              {rewards} {currency}
            </p>
          </div>
        </div>
        <span>
          <button
            type="button"
            className={`btn btn-primary btn-sm mb-4  ${styles.btn_nftBox}`}
            onClick={claimReward}
          >
            CLAIM
          </button>
        </span>
        <div class={`${styles.lottery_statistics_tip_icon}`}>
          <img src={tip} alt="" data-toggle="tooltip" />
          <span className={`${styles.toolTipText}`}>
            This window displays your available balance. There is no time limit
            to claim your staking rewards and you only need to pay gas fees to
            withdraw. Your balance will continue to grow until you return to
            collect.
          </span>
        </div>
      </div>
      <NFTTable data={rewardData} />
    </div>
  );
};
