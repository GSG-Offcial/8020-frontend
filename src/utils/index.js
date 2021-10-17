import { Contract } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';
import { UnsupportedChainIdError } from '@web3-react/core';

import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';

const nf = new Intl.NumberFormat();

export function formatNumber(number) {
  let number1 = parseFloat(String(number).replace(/,/g, ''));
  return nf.format(Math.floor(number1));
}

export function calculatePrice(price, value) {
  let value1 = parseFloat(String(value).replace(/,/g, ''));
  let price1 = parseFloat(String(price).replace(/,/g, ''));
  return formatNumber(value1 * price1);
}

export function toWei(n) {
  return parseEther(n);
}

export function formatNumberInDecimals(params) {
  return +fromWei(+params.toString()).toFixed(4);
}

export function fromWei(n) {
  return n / BigNumber.from('1000000000000000000');
}

export function formatValue(value) {
  return formatNumber(fromWei(+value.toString()).toFixed(3));
}

export function toBN(n) {
  return BigNumber.from(n);
}

export async function etherBalance(addr, ethers) {
  return await ethers.provider.getBalance(addr);
}

// account is not optional
export function getSigner(library, account) {
  return library.getSigner(account);
}

export function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library;
}

export const getContract = (ABI, address, library, account) => {
  return new Contract(address, ABI, getProviderOrSigner(library, account));
};

export function countAddress(address) {
  let alladdress = address.reduce(
    (x, y) => (x.includes(y) ? x : [...x, y]),
    []
  );

  return alladdress.length;
}

export function getErrorMessage(error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network(Please Connect to mainnet).";
  } else if (error instanceof UserRejectedRequestErrorInjected) {
    return 'Please authorize this website to access your Ethereum account.';
  } else {
    console.error(error);
    return 'An unknown error occurred. Contact for more details.';
  }
}

export function getContractaddress(chainId) {
  if (chainId === 1) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 3) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 4) {
    return '0xA7d5b65692948D4c6f49D4b71D849fAd3B9eDDe4';
  } else if (chainId === 42) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 56) {
    return '0xC33E0b83D395FBBa0e2E463b10029F8379AD9c7e';
  } else if (chainId === 137) {
    return '0xe7c15C988528baE6E2C6961E394f0ad663e52CB5';
  } else if (chainId === 80001) {
    return '0x477C2a2EefF6690128D3b68294C40adD687d8F30';
  } else if (chainId === 97) {
    return '0x6FeF7faeF1e86acE1e2093Bb06449D07eC2f1644';
  }
}

export function getLotteryContractaddress(chainId) {
  if (chainId === 1) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 3) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 4) {
    return '0x84feE7A2773E20A87fb881fD9f6Cccf43Aa4f071';
  } else if (chainId === 42) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 56) {
    return '0x6005d83cdE0bc9Cd5C04c44C207023a2fEA4e79B';
  } else if (chainId === 137) {
    return '0x57e81c944eF3f5BCBAED03e1161F07AF8A8933FF';
  } else if (chainId === 80001) {
    return '0xcc1d5004149aEf9959f1B13C5a90A47f6d5fDb42';
  } else if (chainId === 97) {
    return '0xFCaa2FfcC10a7C1011335f98E9e11E668680f5c9';
  }
}

export function getAccessKeyContractAddress(chainId) {
  if (chainId === 1) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 3) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 4) {
    return '0xad704787A2C3b91fBAe0DFCA16b86793c4dD1C87';
  } else if (chainId === 80001) {
    return '0xBd42c2C8a6F233493D05C19bF79E549B483Fc8bB';
  } else if (chainId === 97) {
    return '0xf0a8eF5ca440F84bFE33C34cFC1434a65b688d6A';
  } else if (chainId === 42) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 56) {
    return '0x7EEb595ab39056686Dc4eC84D41C2906CF289693';
  } else if (chainId === 137) {
    return '0xC72F8C9E38aE575E03ed49A854B75E4e81B75eaa';
  }
}

export function getNftRewardPoolAddress(chainId) {
  if (chainId === 1) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 3) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 4) {
    return '0x0DD288513b235c38E6e3A24A4766D952d5f79B27';
  } else if (chainId === 42) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 56) {
    return '0x8B9820b69d2A0dFf6b98f31fe2aeD58251D3D3a7';
  } else if (chainId === 80001) {
    return '0xEb23D3F7AAf099272391fa76e5E4A58c5c48e41f';
  } else if (chainId === 137) {
    return '0xBa48Df724FbC574D795160914DC9d9886698eae5';
  } else if (chainId === 97) {
    return '0x28386e2bA6e346C7D4ce48BA73DE9957D088E160';
  }
}

export function getCommunityContractAddress(chainId) {
  if (chainId === 1) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 3) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 4) {
    return '0x92C3870d6f24dAdBFCF84770dfcEEE49eC1733EC';
  } else if (chainId === 80001) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 97) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 42) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 56) {
    return '0x7163C575Ca8BCF881e4abE3360A6B2462C6eb73F';
  } else if (chainId === 137) {
    return '0x00000000000000000000000000000000000000000';
  }
}

export function getCommunityRewardContractAddress(chainId) {
  if (chainId === 1) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 3) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 4) {
    return '0x9647F6fd1a9fdB2211fB8F791C3cc1FB5Bb1BC6d';
  } else if (chainId === 80001) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 97) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 42) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 56) {
    return '0xE78dE4abD4663eA868E97b9b2ff1DeDc952eEA48';
  } else if (chainId === 137) {
    return '0x00000000000000000000000000000000000000000';
  }
}

export function getChainPrams(id) {
  const hexId = '0x' + id.toString(16);
  if (id === 56) {
    return [
      {
        chainId: hexId,
        chainName: 'Binance Smart Chain Mainnet',
        nativeCurrency: {
          name: 'Binance',
          symbol: 'BNB',
          decimals: 18,
        },
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
        blockExplorerUrls: ['https://bscscan.com/'],
      },
    ];
  }
  if (id === 137) {
    return [
      {
        chainId: hexId,
        chainName: 'Matic/Polygon Mainnet',
        nativeCurrency: {
          name: 'Matic',
          symbol: 'MATIC',
          decimals: 18,
        },
        rpcUrls: ['https://rpc-mainnet.maticvigil.com'],
        blockExplorerUrls: ['https://polygonscan.com/'],
      },
    ];
  }
}

export function formatValueOfPick3(lastNumber) {
  if (lastNumber === undefined) {
    return 0;
  }
  if (lastNumber < 10) {
    return `0 0 ${lastNumber}`;
  }
  if (lastNumber > 10 && lastNumber < 100) {
    return '0 ' + lastNumber.split('').join(' ');
  } else {
    return lastNumber.split('').join(' ');
  }
}

export function formatValueOfPick4(lastNumber) {
  if (lastNumber === undefined) {
    return 0;
  }

  if (lastNumber < 10) {
    return '0 0 0 ' + lastNumber;
  }
  if (lastNumber > 10 && lastNumber < 100) {
    return '0 0 ' + lastNumber.split('').join(' ');
  } else if (lastNumber > 100 && lastNumber < 1000) {
    return '0 ' + lastNumber.split('').join(' ');
  } else {
    return lastNumber.split('').join(' ');
  }
}

//Xenobyte wallet 0x9128A47AB52017bacde7C0f1BC287863E9e16Acc
//Here is my address for GS50 Contracts 0xA37b77E5670e70aCc62aBe86b6b02c450e9eEff7

// /.5 ETH - 5 BNB - MATIC 1000
// https://gateway.pinata.cloud/ipfs/QmTnkRhf5xTtoLSxG1fEkj4N84kzCUnnZ5ECDBfHq9eGkH
