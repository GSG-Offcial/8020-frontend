import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import abi from '../constants/accesskey.json';
import abi2 from '../constants/nftPool.json';
import {
  getContract,
  getAccessKeyContractAddress,
  getNftRewardPoolAddress,
  getNftRewardPoolAddress2,
  getCommunityContractAddress,
  getCommunityRewardContractAddress,
  getCommunityRewardContractAddress2,
} from '../utils/index';

export const useContractAccessKey = () => {
  const { library, account, chainId } = useWeb3React();

  return useMemo(
    () =>
      !!library
        ? getContract(
            abi,
            getAccessKeyContractAddress(chainId),
            library,
            account
          )
        : undefined,
    [library, account, chainId]
  );
};

export const useNftRewardPoolContract = () => {
  const { library, account, chainId } = useWeb3React();

  return useMemo(
    () =>
      !!library
        ? getContract(abi2, getNftRewardPoolAddress(chainId), library, account)
        : undefined,
    [library, account, chainId]
  );
};

export const useContractCommunityToken = () => {
  const { library, account, chainId } = useWeb3React();

  return useMemo(
    () =>
      !!library
        ? getContract(
            abi,
            getCommunityContractAddress(chainId),
            library,
            account
          )
        : undefined,
    [library, account, chainId]
  );
};

export const useNftCommunityRewardPoolContract = () => {
  const { library, account, chainId } = useWeb3React();

  return useMemo(
    () =>
      !!library
        ? getContract(
            abi2,
            getCommunityRewardContractAddress(chainId),
            library,
            account
          )
        : undefined,
    [library, account, chainId]
  );
};

export const useNftCommunityRewardPoolContract2 = () => {
  const { library, account, chainId } = useWeb3React();

  return useMemo(
    () =>
      !!library
        ? getContract(
            abi2,
            getCommunityRewardContractAddress2(chainId),
            library,
            account
          )
        : undefined,
    [library, account, chainId]
  );
};
