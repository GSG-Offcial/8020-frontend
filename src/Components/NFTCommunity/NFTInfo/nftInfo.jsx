import React, { useEffect, useState } from 'react';
import styles from '../FiveNFTBox/FiveNFTBox.module.css';
import {
  useNftCommunityRewardPoolContract,
  useContractCommunityToken,
} from '../../../Hooks/nftPool';
import { formatValue, getNftRewardPoolAddress } from '../../../utils';
import { useWeb3React } from '@web3-react/core';

export const NFTinfo = () => {
  const [tokenIds, setTokenIds] = useState([]);
  // const [staked, setStaked] = useState(false);
  // const [stakeId, setStakedId] = useState();
  const [stakeText, setStakedText] = useState('NO');

  const { account } = useWeb3React();
  const tokenContract = useContractCommunityToken();
  const nftContract = useNftCommunityRewardPoolContract();

  let count = 0;

  useEffect(async () => {
    if (tokenContract) {
      let staked = (await nftContract.isStaked(account)).toString();
      let stakedId = (await nftContract.stakedNft(account)).toString();
      staked && setStakedText(`YES (TokenId: #${stakedId})`);
      async function getId() {
        let balance = (await tokenContract.balanceOf(account)).toString();
        if (count < balance) {
          let tokenId = (
            await tokenContract.tokenOfOwnerByIndex(account, count)
          ).toString();
          setTokenIds((i) => [...i, tokenId]);
          count++;
          getId();
        }
      }
      getId();
    }
  }, [tokenContract]);

  return (
    <div className={` ${styles.FiveNFTBox_mainDiv}`}>
      {/* five Box */}
      <div
        className={`row justify-content-center d-flex ${styles.nested_FiveBox}`}
      >
        <div className={`col-lg-6 col-md-12`}>
          <div className={` ${styles.firstBox}`}>
            <h1 className={`mt-3 ${styles.para_statis_nft}`}>
              YOUR NFT STATUS
            </h1>
            <p>
              ACCESS KEYS IN WALLET: (
              {tokenIds.map((i, index) => {
                return (
                  <span className={` ${styles.amount_nft}`}>
                    {' '}
                    #{i}
                    {index === tokenIds.length - 1 ? '' : ','}{' '}
                  </span>
                );
              })}
              )
            </p>
            <p>
              ACCESS KEY'S STAKED:{' '}
              <span className={` ${styles.amount_nft}`}>{stakeText}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
