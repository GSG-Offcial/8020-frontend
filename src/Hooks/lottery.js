import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { abi, address } from '../constants/lottery.json';
import { getContract } from '../utils/index';

export const useContract = () => {
  const { library, account } = useWeb3React();

  return useMemo(
    () => (!!library ? getContract(abi, address, library, account) : undefined),
    [library, account]
  );
};
