import React, { useEffect, useState } from 'react';
import styles from './FiveNFTBox.module.css';
import {
  useNftRewardPoolContract,
  useContractAccessKey,
} from '../../../Hooks/nftPool';
import { formatValue, getNftRewardPoolAddress } from '../../../utils';
import { useWeb3React } from '@web3-react/core';

export const FiveNFTBox = () => {
  const tokenContract = useContractAccessKey();
  const nftContract = useNftRewardPoolContract();
  const { account, chainId } = useWeb3React();

  const nftAddress = getNftRewardPoolAddress(chainId);

  const [totalStaked, setTotalStaked] = useState('Loading');
  const [totalETh, setTotalEth] = useState('Loading');
  //   const [totalReward, setTotalReward] = useState('Loading');

  useEffect(async () => {
    if (tokenContract) {
      setTotalStaked((await tokenContract.balanceOf(nftAddress)).toString());
    }
    if (nftContract) {
      setTotalEth(formatValue(await nftContract.checkBalance()));
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
    nftContract.unstake();
  }

  return (
    <div className={` ${styles.FiveNFTBox_mainDiv}`}>
      <h1>Stake your NFT</h1>
      {/* five Box */}
      <div
        className={`row justify-content-center d-flex ${styles.nested_FiveBox}`}
      >
        <div className={`col-lg-4 col-md-12`}>
          <div className={` ${styles.firstBox}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>Total NFT Staked</p>
            <p className={` ${styles.amount_nft}`}>{totalStaked}</p>
          </div>
        </div>

        <div className={` col-lg-4 col-md-12`}>
          <div className={` ${styles.firstBox}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              Total ETH in the contract
            </p>
            <p className={` ${styles.amount_nft}`}>{totalETh}</p>
          </div>
        </div>
        <div className={`col-lg-4 col-md-12`}>
          <div className={` ${styles.firstBox}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              Total Rewards Given
            </p>
            <p className={` ${styles.amount_nft}`}>100 NFT ($100)</p>
          </div>
        </div>
        <div className={`col-lg-4 col-md-12`}>
          <div className={` ${styles.firstBox}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              Stake Your NFT(GSACCESS KEY)
            </p>
            {/* <p className={` ${styles.amount_nft}`}></p> */}
            <button
              type="button"
              className={`btn btn-primary btn-sm mb-4  ${styles.btn_nftBox}`}
              onClick={stake}
            >
              Stake
            </button>
          </div>
        </div>

        <div className={`col-lg-4 col-md-12`}>
          <div className={` ${styles.firstBox}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              UnStake NFT(GSACCESS KEY)
            </p>
            {/* <p className={` ${styles.amount_nft}`}>100 NFT ($100)</p> */}
            <button
              type="button"
              className={`btn btn-primary btn-sm mb-4  ${styles.btn_nftBox}`}
              onClick={unStake}
            >
              UnStake
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
