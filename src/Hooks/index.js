import { useState, useEffect, useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { abi } from '../constants/8020.json';
import { injected } from '../connectors';
import { getContract, getContractaddress } from '../utils/index';

export const useContract = () => {
  const { library, account, chainId } = useWeb3React();

  return useMemo(
    () =>
      !!library
        ? getContract(abi, getContractaddress(chainId), library, account)
        : undefined,
    [library, account, chainId]
  );
};

export function useEagerConnect() {
  const { activate, active } = useWeb3React();

  const [tried, setTried] = useState(false);

  useEffect(() => {
    const { ethereum } = window;

    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });

    ethereum.on('chainChanged', () => {
      window.location.reload();
    });

    ethereum.on('accountsChanged', () => {
      window.location.reload();
    });
  }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}

export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3React();

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = (chainId) => {
        console.log('chainChanged', chainId);
        activate(injected);
      };

      const handleAccountsChanged = (accounts) => {
        console.log('accountsChanged', accounts);
        if (accounts.length > 0) {
          activate(injected);
        }
      };

      const handleNetworkChanged = (networkId) => {
        console.log('networkChanged', networkId);
        activate(injected);
      };

      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      ethereum.on('networkChanged', handleNetworkChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
          ethereum.removeListener('networkChanged', handleNetworkChanged);
        }
      };
    }

    return () => {};
  }, [active, error, suppress, activate]);
}
