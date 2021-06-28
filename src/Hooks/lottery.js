import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { abi, address } from '../constants/lottery.json';
import { tokenAbi, tokenAddress } from '../constants/IERC20.json';
import { getContract } from '../utils/index';

export const useContract = () => {
  const { library, account, chainId } = useWeb3React();

  return useMemo(
    () => (!!library ? getContract(abi, address, library, account) : undefined),
    [library, account, chainId]
  );
};

export const useTokenContract = () => {
  const { library, account, chainId } = useWeb3React();

  return useMemo(
    () =>
      !!library
        ? getContract(tokenAbi, tokenAddress, library, account)
        : undefined,
    [library, account, chainId]
  );
};
