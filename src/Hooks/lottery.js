import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { abi } from '../constants/lottery.json';
import { tokenAbi } from '../constants/IERC20.json';
import {
  getContract,
  getLotteryContractaddress,
  getContractaddress,
} from '../utils/index';

export const useContract = () => {
  const { library, account, chainId } = useWeb3React();
  const address = getLotteryContractaddress(chainId);
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
        ? getContract(tokenAbi, getContractaddress(chainId), library, account)
        : undefined,
    [library, account, chainId]
  );
};
