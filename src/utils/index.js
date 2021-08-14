import { Contract } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';

const nf = new Intl.NumberFormat();

export function formatNumber(number) {
  return nf.format(Math.floor(number));
}

export function calculatePrice(price, value) {
  return formatNumber(value * price);
}

export function toWei(n) {
  return parseEther(n);
}

export function fromWei(n) {
  return n / BigNumber.from('1000000000000000000');
}

export function formatValue(value) {
  return fromWei(+value.toString()).toFixed(3);
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

export function getContractaddress(chainId) {
  if (chainId === 1) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 3) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 4) {
    return '0x28c9f2530e93b1c35ad10c7948724c9b1211d0d2';
  } else if (chainId === 42) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 56) {
    return '0xC33E0b83D395FBBa0e2E463b10029F8379AD9c7e';
  } else if (chainId === 137) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 80001) {
    return '0x732165A54f1e0e878977748543cdF5683e3A9C43';
  } else if (chainId === 97) {
    return '0xD33E04d95fb2c7A5a66a7943dD3391d7eBBA0707';
  }
}

export function getLotteryContractaddress(chainId) {
  if (chainId === 1) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 3) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 4) {
    return '0x14778471f99D28bEc37eC9C187BBf83A8175FeD4';
  } else if (chainId === 42) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 56) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 137) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 80001) {
    return '0x2545dcCEDC798504B69fE21a63261857DBdfb7f6';
  } else if (chainId === 97) {
    return '0xD33E04d95fb2c7A5a66a7943dD3391d7eBBA0707';
  }
}

export function getAccessKeyContractAddress(chainId) {
  if (chainId === 1) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 3) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 4) {
    return '0x7e0e491F74B1cEe58b0a4b590D3925d1C0d58905';
  } else if (chainId === 80001) {
    return '0x1C7AF3eb2F152a440f770D01be0Ef12F067c0D81';
  } else if (chainId === 97) {
    return '0x4769670ac2fEa2b864CB96708DB387e8Cf3d0797';
  } else if (chainId === 42) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 56) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 137) {
    return '0x00000000000000000000000000000000000000000';
  }
}

export function getNftRewardPoolAddress(chainId) {
  if (chainId === 1) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 3) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 4) {
    return '0x3002420902a325fBC097C3e8Ff1cc87266ea8AAd';
  } else if (chainId === 42) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 56) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 80001) {
    return '0x4b35f6189673029FE74F47E6c31EE70cBca91d10';
  } else if (chainId === 137) {
    return '0x00000000000000000000000000000000000000000';
  } else if (chainId === 97) {
    return '0x71F66178cc07E13f450726f1bc3C41a039A70381';
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
// /.5 ETH - 5 BNB - MATIC 1000
//https://gateway.pinata.cloud/ipfs/QmSkyoAe45Sj4obdUeVgfxUbLJ81aDS2DG2p4yJ76hWsAL
