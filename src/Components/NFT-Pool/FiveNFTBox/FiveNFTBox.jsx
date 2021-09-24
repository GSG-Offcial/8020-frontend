import React, { useEffect, useState } from 'react';
import styles from './FiveNFTBox.module.css';
import {
  useNftRewardPoolContract,
  useContractAccessKey,
} from '../../../Hooks/nftPool';
import { formatValue, getNftRewardPoolAddress } from '../../../utils';
import { useWeb3React } from '@web3-react/core';

import tip from '../../Images/tip.png';

export const FiveNFTBox = () => {
  const tokenContract = useContractAccessKey();
  const nftContract = useNftRewardPoolContract();
  const { account, chainId } = useWeb3React();

  const nftAddress = getNftRewardPoolAddress(chainId);

  const [totalStaked, setTotalStaked] = useState('Loading');
  const [totalETh, setTotalEth] = useState('Loading');
  const [totalReward, setTotalReward] = useState('Loading');
  const [currency, setCurrency] = useState('loading');
  const [address, setAddress] = useState('');
  const [id, setId] = useState('');

  useEffect(async () => {
    if (tokenContract) {
      setTotalStaked((await tokenContract.balanceOf(nftAddress)).toString());
    }
    if (nftContract) {
      setTotalEth(formatValue(await nftContract.checkBalance()));
      setTotalReward(formatValue(await nftContract.totalClaimed()));
    }

    if (chainId === 80001 || chainId === 137) {
      setCurrency('MATIC');
    } else if (chainId === 56 || chainId === 97) {
      setCurrency('BNB');
    } else {
      setCurrency('ETH');
    }
  }, [tokenContract, nftContract]);

  async function stake() {
    let isApproved = await tokenContract.isApprovedForAll(account, nftAddress);
    let tokenId = await tokenContract.tokenOfOwnerByIndex(account, 0);
    if (isApproved) {
      nftContract.stake(tokenId);
    } else {
      let tx = await tokenContract.setApprovalForAll(nftAddress, true);
      if (await tx.wait()) {
        nftContract.stake(tokenId);
      }
    }
  }

  function unStake() {
    nftContract.unStake();
  }

  function transfer() {
    tokenContract.transferFrom(account, address, id);
  }

  return (
    <div className={` ${styles.FiveNFTBox_mainDiv}`}>
      <h1>Stake your NFT</h1>
      {/* five Box */}
      <div
        className={`row justify-content-center d-flex ${styles.nested_FiveBox}`}
      >
        <div className={` col-lg-4 col-md-12`}>
          <div className={` ${styles.firstBox}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>Total NFT staked</p>
            <p className={` ${styles.amount_nft}`}>{totalStaked}</p>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              Total {currency} in the contract
            </p>
            <p className={` ${styles.amount_nft}`}>{totalETh}</p>

            <p className={`mt-3 ${styles.para_statis_nft}`}>
              Total Rewards given
            </p>
            <p className={` ${styles.amount_nft}`}>{totalReward}</p>
            <div class={`${styles.lottery_statistics_tip_icon}`}>
              <img src={tip} alt="" data-toggle="tooltip" />
              <span className={`${styles.toolTipText}`}>
                In this window you will see the total number of Access Key NFT’s
                currently being staked. There is only room for 500 NFT’s. Here,
                you will also find the total value locked inside the staking
                contract and the total lifetime rewards paid out. The staking
                pool is coded to distribute 100% of the available amount evenly
                with all stakeholders. Anytime the total amount of ETH, BNB, or
                MATIC is more than 1 full unit, the pool is eligible for
                distribution.
              </span>
            </div>
          </div>
        </div>

        <div className={`col-lg-4 col-md-12`}>
          <div className={` ${styles.firstBox}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              STAKE YOUR ACCESS KEY
            </p>
            <button
              type="button"
              className={`btn btn-primary btn-sm mb-4  ${styles.btn_nftBox}`}
              onClick={stake}
            >
              STAKE
            </button>
            <div class={`${styles.lottery_statistics_tip_icon}`}>
              <img src={tip} alt="" data-toggle="tooltip" />
              <span className={`${styles.toolTipText}`}>
                When staking your Access Key NFT you will have to confirm 2
                (two) transactions in MetaMask. The first transaction approves
                the use of your NFT in the staking contract, and the second will
                move your NFT from your wallet into the staking contract. There
                is no additional cost for staking your token. You only need to
                pay for gas fees per transaction.You can only stake one NFT per
                wallet.
              </span>
            </div>
          </div>
          <div className={` ${styles.firstBox}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              UNSTAKE YOUR ACCESS KEY
            </p>
            <button
              type="button"
              className={`btn btn-primary btn-sm mb-4  ${styles.btn_nftBox}`}
              onClick={unStake}
            >
              UNSTAKE
            </button>
            <div class={`${styles.lottery_statistics_tip_icon}`}>
              <img src={tip} alt="" data-toggle="tooltip" />
              <span className={`${styles.toolTipText}`}>
                Anytime you would like to recover your Access Key simply unstake
                it from the contract. There is no penalty for removing your NFT.
                You only pay gas fees to execute the transaction.
              </span>
            </div>
          </div>
        </div>
        <div className={`col-lg-6 col-md-12`}>
          <div className={` ${styles.firstBox}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              TRANSFER YOUR ACCESS KEY
            </p>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder="Address here"
              aria-label="Address here"
              aria-describedby="basic-addon1"
            />
            <input
              style={{ marginTop: '30px' }}
              type="text"
              class="form-control"
              onChange={(e) => {
                setId(e.target.value);
              }}
              placeholder="Token/NFT ID"
              aria-label="Token/NFT ID"
              aria-describedby="basic-addon1"
            />
            <button
              type="button"
              style={{ marginTop: '50px' }}
              className={`btn btn-primary btn-sm mb-4  ${styles.btn_nftBox}`}
              onClick={transfer}
            >
              TRANSFER
            </button>
            <div class={`${styles.lottery_statistics_tip_icon}`}>
              <img src={tip} alt="" data-toggle="tooltip" />
              <span className={`${styles.toolTipText}`}>
                You can transfer your Access Key to any compatible wallet. All
                you need is the wallet address and your token ID. In order to
                find your token ID, inspect your wallet contents on the network
                block explorer and you will find your NFT in the ERC721 tab as
                GSAK.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
