import React, { useEffect, useState } from 'react';
import styles from './FiveNFTBox.module.css';
import {
  useNftRewardPoolContract,
  useContractAccessKey,
} from '../../../Hooks/nftPool';
import { formatValue, getNftRewardPoolAddress } from '../../../utils';
import { useWeb3React } from '@web3-react/core';

import MaskGroup24 from '../../Images/MaskGroup24.svg';

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
            <p className={`mt-3 ${styles.para_statis_nft}`}>Total NFT Staked</p>
            <p className={` ${styles.amount_nft}`}>{totalStaked}</p>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              Total {currency} in the contract
            </p>
            <p className={` ${styles.amount_nft}`}>{totalETh}</p>

            <p className={`mt-3 ${styles.para_statis_nft}`}>
              Total Rewards Given
            </p>
            <p className={` ${styles.amount_nft}`}>{totalReward}</p>
          </div>
        </div>

        <div className={`col-lg-4 col-md-12`}>
          <div className={` ${styles.firstBox}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              Stake Your NFT(GSACCESS KEY)
            </p>
            <button
              type="button"
              className={`btn btn-primary btn-sm mb-4  ${styles.btn_nftBox}`}
              onClick={stake}
            >
              Stake
            </button>
          </div>
          <div className={` ${styles.firstBox}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              UnStake NFT(GSACCESS KEY)
            </p>
            <button
              type="button"
              className={`btn btn-primary btn-sm mb-4  ${styles.btn_nftBox}`}
              onClick={unStake}
            >
              UnStake
            </button>
          </div>
        </div>
        <div className={`col-lg-6 col-md-12`}>
          <div className={` ${styles.firstBox}`}>
            <p className={`mt-3 ${styles.para_statis_nft}`}>
              Transfer Your Access Key
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
              Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
